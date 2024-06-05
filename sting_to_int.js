let S = ["hes",1,4,6,"2","hr","5"]
let vals= []
for(let i=0;i<S.length;i++){
    vals.push(Number(S))
    try{
        isNaN(vals[i])?console.log("bad string"):console.log(vals[i])
    } catch(err){
        console.log(err)
    }
}