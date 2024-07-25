const numbersArray = [88, 33,  7, 48, 51, 85, 81,  6, 54, 27, 19,  2, 39, 44, 17, 97, 19,
    68, 44, 68, 26, 48, 98, 25,  5, 94, 85, 34,  2, 56]
const bucketSort = (arr,numBuckets)=>{
    const buckets = new Array(numBuckets).fill(null).map(()=>[])
    maxVal = Math.max(...arr)
    arr.forEach((val)=>{
const index = Math.floor((val/maxVal)* (numBuckets-1))
buckets[index].push(val)
    })
console.log(buckets)
}   
bucketSort(numbersArray,5);
