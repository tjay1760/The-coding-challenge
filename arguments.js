function addTogether(...rest) {
    if(rest.length==1&&(typeof rest[0]==="number")){
      return (num)=>{
      if(typeof num==="number"){
       return  num+rest[0];
      }
      }
    }
    if((typeof rest[0]!=="number")||(typeof rest[1]!=="number")){
      return
    }else if(rest.length==2){
      return rest.reduce((a,b)=>a+b)
    }
  }
   console.log(addTogether(2))