const recur=(arr)=>{
  
    if (!Array.isArray(arr)) {
        return arr; // If it's not an array, return the value
      }
      const [first, ...rest] = arr
if (typeof first=="number" && rest.length<0){
    return first
} else if (typeof first=="number" && rest.length>0){
recur(rest)
return first
}
return recur(first)
}

recur([1, [2], [3, [[4]]]])