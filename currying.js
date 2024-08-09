
const curryadd = (x,y)=>y=>x+y;
const addOne = curryadd(1);
const addFour = addOne(3);
console.log(addFour );