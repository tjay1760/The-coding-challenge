
const curryadd = (x,y)=>y=>x+y;
const addOne = curryadd(1);
const addFour = addOne(3);
// console.log(addFour );
// initial function
const multiply =(x,y,z)=> x*y*z;
// carryed
const carryMulti =x=>y=>z=>x*y*z;
const multiplyTwo = carryMulti(2);
const multiplyThree = multiplyTwo(3)
// console.log(multiplyThree(5));

function handleClick(action) {
    return function(event) {
      console.log(`Performing ${action} action on button click.`);
    };
  }
  function handleClick2(action) {
      console.log(`Performing ${action} action on button click.`);
  }
  handleClick2("save");
  handleClick("delete")("del");