const numbersArray = [88, 33,  7, 48, 51, 85];
    const selectionSort = (arr)=>{
for (let i=0;i<arr.length;i++){
    let theIndex = i;
    let min = arr[0];
for (let j=i;j<arr.length;j++){
    if (arr[j]<min){
min = arr[j];
theIndex= j

    }
    if(theIndex!==j){
        let swap = arr[i];
        arr[i] = arr[theIndex];
        arr[theIndex] = swap;
    }
}


}

console.log(arr);
    }
selectionSort(numbersArray);