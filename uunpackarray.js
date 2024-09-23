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

const flatten =(arr)=>{
    if(arr.length ===0){
        return []
    }
    const[element, ...rest] = arr;
    if(Array.isArray(element)){
return [...flatten(element),...flatten(rest)]
    }
    return [element, ...flatten(rest)]

}
flatten([ 1, 2, 3, [ [ 4 ] ] ])

console.log(steamrollArray([1, [2], [3, [[4]]]]));
