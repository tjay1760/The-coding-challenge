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
function Person (firstname, lastname){
    this.firstname = firstname
    this.lastname = lastname
    }
    person1 = new Person("Walter","White");
    person2 = new Person("Master","rasta")
Person.prototype.getName = function (){
    console.log(`${this.firstname} ${this.lastname}`)
}
function SuperHero (firstname,lastname){
    Person.call(this,firstname,lastname)
    this.superhero =true
}
SuperHero.prototype.fight = function (){
    console.log('fighting')
} 
SuperHero.prototype = Object.create(Person.prototype)
const marvel = new SuperHero("black","widow")
marvel.getName()