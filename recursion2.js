
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
console.log(decimalToBinary(10))
