// version 1
const output = []
function steamrollArray(arr) {
   arr.forEach(element => {
    if (typeof element === "number"){
        output.push(element)
    }
    if(Array.isArray(element)){
steamrollArray(element)
    }
    
   });
   return output
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
