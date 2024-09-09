
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
SuperHero.prototype = Object.create(Person.prototype)
// SuperHero.prototype.constructor = SuperHero;

SuperHero.prototype.fight = function (){
    console.log('fighting')
} 
SuperHero.prototype.checkhero = function (){
    if (this.superhero){
        console.log(`${this.firstname}  ${this.lastname} is a Hero`)
    }
}

const marvel = new SuperHero("black","widow")
const tjay = new Person("John","Murianki");
// marvel.fight();
marvel.checkhero()
