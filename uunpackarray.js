// version 1
const output = []
function steamrollArray(arr) {
   arr.forEach(element => {
    if(!Array.isArray(element)){
output.push(element)
return
    }
    steamrollArray(element)    
   });
   return output
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
