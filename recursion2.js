
const reverseString =(str)=>{
    if (str==''){
        return ""
    }
    return reverseString(str.slice(1)) + str[0]
}
const isPalindrome = (str)=>{
if (str.length<=1){
    return true;
}
if (str[0]===str[str.length-1]){
    return isPalindrome(str.slice(1,str.length-1))
}
return false
}
const decimalToBinary =(num)=>{
    if (num ===0){
        return "0"
    }
    if (num ===1){
        return "1"
    }
  return decimalToBinary(Math.floor(num/2))+num%2
    
}
const sumOfNaturalNumbers =(num) =>{
if (num==1){
    return 1
}
return sumOfNaturalNumbers(num-1)+ num
}
const binarySearch = (arr, left,right,toFind)=>{
    let mid = (left+right)/2
if (left>right){
    return -1
}
if(toFind===arr[mid]){
    return mid
}
if ( toFind<arr[mid]){
    return binarySearch(arr,left,mid,toFind)
}
return binarySearch(arr,mid,right,toFind)
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9],0,8,2))
