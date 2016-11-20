# Definition
Modules are used to mimic classes and focus on public and private access to variables and functions. Modules help in reducing the global pollution. Effective use of modules can reduce name collisions across a large code base.
```Javascript
var moduleNmae = function（） {
  // private state
  // private functions
  return {
    // public state
    // public state
    console.log('');
  }
};
```

Two requirements in the preceding format:  
* There must be an outer enclosing function that needs to be executed at least once.
* This enclosing function must return at least one inner function. This is necessary to create a closure over the private state - without this, you can't access the private state at all.
```Javascript
var superModule = (function() {
  var secret = 'supersecretkey';
  var passcode = 'nuke';
  function getSecret() {
    console.log(secret);
  }
  function getPasscode() {
    console.log(passcode);
  }
  return {
    getSecret: getSecret,
    getPasscode: getPasscode
  }
})();
superModule.getSecret();
superModule.getPasscode();
```
> ***Note***
This example satisfies both conditions. Firstly, we create an IIFE(immediately-invoked function expression) or a named function to act as an outer enclosure. The variables defined will remain private because they are scoped in the function. We return the public functions to make sure that we have a closure over the private scope. using IIFE in the module pattern will actually result in a singleton instance of this function. If you want to create multiple instances, you can create named function expressions as part of the module as well.  

# Stylistic considerations
* Use function declaration instead of function expressions
  ```Javascript
  // bad
  const foo = function() {}

  // good
  function foo() {}
  ```
* Never declare a function in a non-function block(if, while, and so on). Assign the function to a variable instead.
* Never name a parameter **arguments**. This will take precedence over the arguments object that is given to every function scope.
