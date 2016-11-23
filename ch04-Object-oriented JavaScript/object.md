JavaScript objects can be seen as mutable key-value-based collections. In JavaScript, arrays, functions, and RegExp are objects while numbers, strings, and Booleans are object-like constructors that are immutable but have methods.
# Understanding objects
**OOP** emerged from the need to manage complexity. The main idea is to divide the entire system into smaller pieces that are isolated from each other. If these small pieces can hide as many implementation details as possible, they become easy to use.  
> **Classic car analogy**  
When you drive a car, you operate on the interface - the steering, clutch, brake, and accelerator. Your view of using the car is limited by this interface, which makes it possible for us to drive the car. This interface is essentially hiding all the complex systems that really drive the car, such as the internal functioning of its engine, its electronic system, and so on. As a driver, you don't bother about these complexities. A similar idea is the primary driver of **OOP**. An object hides the complexities of how to implement a particular functionality and expose a limited interface to the outside world.

*Additionally, an object usually hides its internal state from other objects and prevents its direct modification.OOP operates on the idea that the stae of an object is inherently hidden from the outside world and it can be changed only via controlled interface operations*.

Key Points
* Hide complexities of implementation
* Expose limited interface to outside world

2 fundamental principles of a better object-oriented design:
* Program to an interface and not to an implementation
* Object composition over class inheritance  
In Java, you can write a decoupled code using interface
```Java
// Programming to an interface 'List' and not implementation 'ArrayList'
List theList = new ArrayList();
```
Programming to an interface gives you the liberty to change your code and use any other specific child of the List interface.

Problems of programming to an interface:
* you can only enhance the child class with the limit of the parent class
* inheritance introduces tight coupling. Child classes have knowledge about their ancestors. This tightly couples a child class with its parent.
* When you subclass from a parent, you don't have a choice to select what you want to inherit and what you don't.

> *Joe Armstrong*(the inventor of Erlang):  
*The problem with object-oriented languages is they've got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.*

## Behavior of JavaScript objects
An object contains properties, defined as a key-value pair. A property key(name) can be string and the value can be any valid JavaScript value.  
* Create objects using object literals
```JavaScript
var nothing = {};
var author = {
  'firstname': 'Douglas',
  'lastname': 'Crockford'
};
author.firstname = 'hehe';
```
> You can omit quotes if the name is a legal JavaScript name. quotes are required around first-name but are optional for firstname.

* You can nest objects:
```JavaScript
var author = {
  'firstname': 'Douglas',
  'lastname': 'Crockford',
  book: {
    title: 'JavaScript',
    pages: '172'
  }
};
```
* Access properties
```JavaScript
console.log(author['firstname']);
console.log(author.lastname);
console.log(author.book.tilte);
```
> You will get undefined if you attempt to retrieve a non-existent value. A useful trick is to use **||** operator to fill in default values:
```JavaScript
console.log(author.age || 'No age found.');
```

## Prototype
When an object does not have a requested property, JavaScript goes to its prototype to look for it.  
The **Object.getPrototypeOf()** returns the prototype of an object.  
Fundamentally, prototypes are closely associated with functions.  
Prototypes are used as a way to define properties and functions that will be applied to instances of objects. The prototype's properties eventually become properties of the instantiated objects.  
Prototypes can be seen as blueprints for object creation. Prototypes in JavaScript are used to write a classical style object-oriented code and mimic classical inheritance.
```JavaScript
// a function returns nothing and creates nothing
function Player() {}
// Add a function to the prototype property of the function
Player.prototype.useBat = function() {
  return true;
};

console.log(Player());
// Now we call Player() as a constructor along with new
// 1. the instance is created
// 2. method useBat() is derived from the prototype of the function
var swingJay = new Player();
console.log(swingJay());
```
# Instance properties versus prototype properties
```JavaScript
function Player() {
  this.isAvailable = function() {
    return 'Instance method.'
  };
}
Player.prototype.isAvailable = function() {
  return 'prototype method.';
};
var crazyBob = new Player();
console.log(crazyBob.isAvailable());  // Instance method.
```
> When we have the same functions defined both as an instance property and as a prototype, the instance property takes the precedence.  
The rules governing the precedence of the initialization are:
* properties are tied to the object instance from the prototype
* properties are tied to the object instance in the constructor function

In JavaScript, the value of **this** is determined by the invocation context of a function and where it is called.
* When **this** is used in a global context: When **this** is called in a global context, it is bound to the global context. For example, in the case of a browser, the global context is usually **window**. This is true for functions also. If you use **this** in a function that is defined in the global context, it is still bound to the global context because the function is part of the global context:
```JavaScript
function globalAlias() {
  return this;
}
console.log(globalAlias());
```
* When **this** is used in an object's method: In this case, **this** is assigned or bound to the enclosing object. Note that the enclosing object is the immediate parent if you are nesting the objects.
```JavaScript
var f = {
  name: 'f',
  func: function() {
    return this;
  }
};
console.log(f.func());  // { name: 'f', func: [Function] }
```
* When there is no context: A function, when invoked without any object, does not get any context. By default, it is bound to the global context. When use **this** in such a function, it is also bound to the global context.
* When **this** is used in a constructor function which means a function is called with a **new** keyword, it acts like a constructor. **this** points to the object being constructed - the new object being created.
```JavaScript
var member = 'global';
function f() {
  this.member = 'f';
}
var o = new f();
console.log(o.member);  // f
```

instance properties take precedence when the same property is defined both as an instance property and prototype property.  
what happens is that the prototype is attached to he object and referred when any property of this object is referred. Essentially, when a property is referenced on an object, either of the following occur:
* The object is checked for the existence of the property. If it is found, the property is returned.
* The associated prototype is checked. If the property is found, it returned; otherwise, an undefined error is returned.
```JavaScript
function Player() {
  isAvailable = false;
}
var crazyBob = new Player();
Player.prototype.isAvailable = function() {
  return isAvailable;
};
console.log(crazyBob.isAvailable());  // false
```
Achieve private, public feature using **function scope**
* You can declare private variables using the var keyword in a function. They can be access by private functions or privileged methods.
* Private functions may be declared in an object's constructor and can be called by privileged methods.
* Privileged methods can be declared with
```JavaScript
this.method = function() {};
```
* Public methods are declared with
```JavaScript
Class.prototype.method = function() {};
```
* Public properties can be declared with *this.property* and accessed from outside the object.

Example:
```JavaScript
function Player(name, sport, age, country) {
  this.constructor.noOfPlayers++;
  // private properties and functions
  // can only be viewed, edited, or invoked by privileged members
  var retirement = 40;
  var available = true;
  var playerAge = age ? age:18;
  function isAvailable() {
    return available && (playerAge < retirement);
  }
  var playerName = name ? name:'Unknown';
  var playerSport = sport ? sport:'Unknown';

  // privileged methods
  // can be invoked from outside and can access private members
  // can be replaced with public counterparts
  this.book = function() {
    if(!isAvailable) {
      this.available = false;
    } else {
      console.log('Player is unavailable');
    }
  };
  this.getSport = function() { return playerSport};

  // public properties, modifiable from anywhere
  this.batPreference = 'lefty';
  this.hasCelebGirlfriend = false;
  this.endorses = 'super brand';
}

// public methods - can be read or writen by anyone
// can only access public and prototype properties
Player.prototype.switchHands = function() {
  this.batPreference = 'righty';
};
Player.prototype.dateCeleb = function() {
  this.hasCelebGirlfriend = true;
};
Player.fixEyes = function() {
  this.wearGlasses = false;
};
// prototype properties - can be read or written by anyone(or overridden)
Player.prototype.wearGlasses = true;
// static properties - anyone can read or write
Player.noOfPlayers = 0;
(
  function PlayerTest(){
    var cricketer = new Player('vivian', 'cricket', 23, 'England');
    var golfer = new Player('Pete', 'Golf', 32, 'USA');
    console.log('So far there are ' + Player.noOfPlayers + ' in the guild.');
    cricketer.fixEyes();
    golfer.fixEyes();
    cricketer.endorses = 'other brand';
    Player.prototype.fixEyes = function() {
      this.wearGlasses = true;
    };
    cricketer.switchHands = function() {
      this.batPreference = 'undecided';
    };
  }
)();
```
# Inheritance
Inheritance is very useful in promoting code reuse.  
Traditionally, inheritance is used to establish or describe an IS-A relationship.(C++, Java)  
JavaScript has completely different mechanism to handle inheritance. JavaScript is classless language and uses prototypes for inheritance.  
Prototypal inheritance is very different in nature and needs thorough understanding. In prototypal inheritance, instances inherit from other instances.  
Each JavaScript object has a link to another object called its prototype. This prototype object, in turn, has a prototype of its own, and so on until an object is reached with null as its prototype;  
null, by definition, has no prototype, and acts like the final link in this prototype chain.
```JavaScript
Subclass.prototype = new SuperClass();
Child.prototype = new Person();
```
```JavaScript
function Person() {}
Person.prototype.cry = function() {
  console.log('crying.');
};
function Child() {}
Child.prototype = new Person();
var aChild = new Child();
console.log(aChild instanceof Child);  // true
console.log(aChild instanceof Person);  // true
console.log(aChild instanceof Object);  // true
```
A complex example
```JavaScript
// employee object
function Employee() {
  this.name = '';
  this.dept = 'None';
  this.salary = 0.00;
}

// manager object
function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

// contributor
function IndividualContributor() {
  Employee.call(this);
  this.active_projects = [];
}
IndividualContributor.prototype = Object.create(Employee.prototype);

// Team lead
function TeamLead() {
  Manager.call(this);
  this.dept = 'Software';
  this.salary = 100000;
}
TeamLead.prototype = Object.create(Manager.prototype);

function Engineer() {
  TeamLead.call(this);
  this.dept = 'JavaScript';
  this.desktop_id='8822';
  this.salary = 80000;
}
Engineer.prototype = Object.create(TeamLead.prototype);

var genericEmployee = new Employee();
console.log(genericEmployee);
var karen = new Manager();
karen.name = 'Karen';
karen.reports = [1, 2, 3];
console.log(karen);
var jason = new TeamLead();
jason.name = 'Jason';
console.log(json);
```
> * Employee.call(this); -- The **call()** method calls a function with a specific object as its context(in this case, it is given the this). **call()** allows us to specify which object will be referenced by the **this** keyword when the function will be executed.  
Like **super()** in Java, calling **parentObject.call(this)** is necessary to correctly initialize the object being created.
* **Object.create()** instead of **new**. **Object.create()** creates an object with a specified prototype. When we do **new Parent()**, the constructor logic of the parent is called. In most cases, what we want is for **Child.prototype** to be an object that is linked via its prototype to **Parent.prototype**. If the parent constructor contains additional logic specific to the parent, we don't want to run this while creating the child object. This can cause very difficult-to-find bugs. **Object.create()** creates the same prototypal link between the child and parent as the **new** operator without calling the parent constructor.
>
To have a side-effect-free accurate inheritance mechanism, we have to make sure that we perform the following:  
* Setting the prototype to an instance of the parent initializes the prototype chain(inheritance); this is done only once(as the prototype Object is shared)
* Calling the parent's constructor initializes the object itself; this is done with every initialization(you can pass different parameters each time you construct it)

```JavaScript
function Employee() {
  this.dept = 'None';
  this.salary = 0.0;
}
Employee.prototype.name = '';
function Manager() {
  this.reports = [];
}
Manager.prototype = new Employee();
var sandy = new Manager();
var karen = new Manager();
Employee.prototype.name = 'Junk';
console.log(sandy.name);
console.log(karen.name);
```
> The **name** property of both sandy and karen has changed to 'Junk'. This is because the **name** property is declared outside the constructor function. So, when you change the value of name in the Employee's prototype, it propagates to all the descendants. In this example, we are modifying Employee's prototype after the sandy and karen objects are created. If you changed the prototype before the sandy and karen objects were created, the value would still have changed to 'Junk'.

All native JavaScript objects - Object, Array, String, Number, RegExp, Function, have  prototype properties that can be extended, which means we can extend the functionality of the language itself.  
Refer: [Extending built-in natives, Evil or not ?](http://perfectionkills.com/extending-native-builtins/)
```JavaScript
String.prototype.reverse = function() {
  return Array.prototype.reverse.apply(this.split('')).join('');
};
var str = 'JavaScript';
log(str.reverse());  // tpircSavaJ
```

# Getters and setters
ECMAScript6:
```JavaScript
var person = {
  firstname: 'albert',
  lastname: 'einstein',
  setLastName: function(_lastname) {
    this.lastname = _lastname;
  },
  setFirstName: function(_firstname) {
    this.firstname = _firstname;
  },
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
};
person.setLastName('Newton');
person.setFirstName('Issac');
console.log(person.getFullName());
```
Another way of declaring getters and setters is using the **Object.defineProperty()** method.
```JavaScript
var person = {
  firstname: '',
  lastname: '',
};
Object.defineProperty(person, 'fullname', {
  get: function() {
    return this.firstname + ' ' + this.lastname;
  },
  set: function(name) {
    //
  }
});
person.fullname = 'Issac Newton';
console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname);
```
> You can call **Object.defineProperty()** even after the object is created.

# Undersoce.js property related methods
* **keys()** This method retrieves the names of an object's own enumerable properties. This does not traverse up the prototype chain.
```JavaScript
var _ = require('underscore')
var testObj = {
  name: '',
  age: 90,
  profession: 'Physics'
};
console.log(_.keys(testObj));  // ['name', 'age', 'profession']
```
* **allKeys()** Retrieves the names of an object's own and inherited properties
```JavaScript
function Scientist() {
  this.name = 'Albert';
}
Scientist.prototype.married = true;
aScientist = new Scientist();
console.log(_.keys(aScientist));  // ['name']
console.log(_.allKeys(aScientist));  // ['name', 'married']
```
* **values()** Retrieves the values of an object's own properties
* **mapObject()** Transforms the value of each property in the object
```JavaScript
function Scientist() {
  this.name = 'Albert';
  this.age = 90;
}
aScientist = new Scientist();
var lst = _.mapObject(aScientist, function(val, key){
  if( key === 'age') {
    return val + 10;
  } else {
    return val;
  }
});
console.log(lst); // {name: 'Albert', age: 100}
```
* **functions** Returns a sorted list of the names of every method in an object - the name of every function property of the object
* **pick()** Returns a copy of the object, fltered to just the values of the keys provided
```JavaScript
console.log(_.pick(aScientist, 'name', 'age'));  // {name: 'Albert', age: 90}
console.log(_.pick(aScientist, function(val, key, object){
  return _.isNumber(val);
}));
```
* **omit()** Returns a copy of the object, filtered to omit the values for the specified keys.
