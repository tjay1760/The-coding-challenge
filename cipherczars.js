function rot13(str) {
    const A = 65;
    const N = 78;
    const Z = 90;
    let cipherStr = ""
    for(let char in str){
      if(str.charCodeAt(char)>=78&&str.charCodeAt(char)<=90){
  cipherStr+=String.fromCharCode(str.charCodeAt(char)-13)
      } else if(str.charCodeAt(char)<78&&str.charCodeAt(char)>=65){
        cipherStr+=String.fromCharCode(str.charCodeAt(char)+13)
      } else{
         cipherStr+= String.fromCharCode(str.charCodeAt(char)) 
      }
    }
  console.log (cipherStr)
    return cipherStr;
  }
  
  rot13("SERR PBQR PNZC");