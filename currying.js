
const add = (x,y) => x + y;
console.log(add (2,3))

const curryadd = (x,y)=>y=>x+y;
console.log(curryadd(2)(3));