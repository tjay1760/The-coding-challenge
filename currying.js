
const curryadd = (x,y)=>y=>x+y;
const addOne = curryadd(1);
const addFour = addOne(3);
console.log(addFour );
// initial function
const multiply =(x,y,z)=> x*y*z;
// carryed
const carryMulti =x=>y=>z=>x*y*z;
const multiplyTwo = carryMulti(2);
const multiplyThree = multiplyTwo(3)
console.log(multiplyThree(5));
