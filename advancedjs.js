function sayMyName (name){
    console.log(`my name is ${this.name}`)
}
const sayMyName2 =(name)=>{
    console.log(`my name is ${this.name}`)
}
const person ={
    name:"tjay",
    sayMyName: function (name){
        console.log(this.name)
    }
}
function Person (name){
    this.name = name
    }

john = new Person (`tjay`)

globalThis.name = 'mikey'
sayMyName();