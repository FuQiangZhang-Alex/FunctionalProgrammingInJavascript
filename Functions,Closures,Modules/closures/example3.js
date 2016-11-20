function privateTest() {
  var points = 0;
  this.getPoints = function() {
    return points;
  };
  this.score = function() {
    points++;
  };
}
var private = new privateTest();
private.score();
console.log(private.points);
console.log(private.getPoints());
