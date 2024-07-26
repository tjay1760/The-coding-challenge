const numbersArray = [88, 33,  7, 48, 51, 85, 81,  6, 54, 27, 19,  2, 39, 44, 17, 97, 19,
    68, 44, 68, 26, 48, 98, 25,  5, 94, 85, 34,  2, 56]
    const insertionSort =(arr)=>{
        for (let i=1;i<arr.length;i++){
 let temp = arr[i]
 let back = i-1
 while(arr[back]>temp){
    arr[back+1]=arr[back]
    arr[back] =temp
    back--
 }
        }
        console.log(arr);
       }
          insertionSort(numbersArray)
    