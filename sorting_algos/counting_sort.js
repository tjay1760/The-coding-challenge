const numbersArray = [88, 33,  7, 48, 51, 85, 81,  6, 54, 27, 19,  2, 39, 44, 17, 97, 19,
    68, 44, 68, 26, 48, 98, 25,  5, 94, 85, 34,  2, 56]
    const maxVal = Math.max(...numbersArray);
    const countArray = Array(maxVal+1).fill().map(()=>0)

for(let i=0;i<countArray.length;i++){
   const countAtIndex = numbersArray.filter((val)=>val===i).length
   countArray[i] = countAtIndex
}
const sortedArray = [];
for(let i =0;i<countArray.length;i++){
    if(countArray[i]>0){
        for(let c=0;c<countArray[i];c++){
            sortedArray.push(i)
        }
    }
}
console.log(sortedArray)

