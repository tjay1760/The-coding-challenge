function normal (){
    console.log("normal")
    return `done`
}
function* generator (){
yield normal();
yield "hi"
}

const result  = generator();
for (const i of result){
    console.log(i)
}