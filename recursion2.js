// Reverse string
const reverseString =(str)=>{
    if (str==''){
        return ""
    }
    return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString("hello"))
/*
motion 
call 1 returns --> reverseString("ello") + "h" adds to callstack
call 2 returns --> reverseString("llo") +"e" adds to callstack
call 3 returns --> reverseString("lo") +"l" adds to callstack
call 4 returns --> reverseString("o") +"l" adds to callstack
call 5 returns --> reverseString("") +"o" adds to callstack
reverseString("") +"o" is popped off callstack return is "o"
reverseString("o") +"l" is popped from call stack return is "l"  
*/