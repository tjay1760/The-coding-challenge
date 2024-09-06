
const person ={
    name:"tjay",
    sayMyName: function (name){
        console.log(this.name)
    }
}
person.sayMyName()