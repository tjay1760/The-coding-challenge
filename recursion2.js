// Reverse string
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
    console.log(str[str.length-2])
    return isPalindrome(str.slice(1,str.length-1))
}
return false
}

console.log(isPalindrome("hlabfalh"))