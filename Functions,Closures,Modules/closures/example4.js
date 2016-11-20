// wrong way
// for( var i = 0;i <= 5; i++) {
//   setTimeout(function delay(){
//     console.log(i);
//   }, i*1000);
// }
// right way
for(var i = 0; i <= 5; i++) {
  (
    function(j) {
      setTimeout(function delay() {
        console.log(j);
      }, j*1000);
    }
  )(i);
}
