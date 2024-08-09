// normal
// function add(x, y) {
//     return x + y;
//   }
  
//   console.log(add(3, 4));
const add = (x,y) => x + y;
console.log(add (2,3))
// curried
// function add(x,y){
//     return function (y){
//         return x*y;
//     }
// }
const curryadd = (x,y)=>y=>x+y;
console.log(curryadd(2)(3));