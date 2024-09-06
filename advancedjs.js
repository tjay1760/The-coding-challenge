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
sayMyName2.call(person)

// person.sayMyName()
sayMyName.call(person)