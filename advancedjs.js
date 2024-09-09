class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getName(){
    console.log(`this is ${fname}  ${lname}`)
  }
}
class SuperHero extends Person {
    
    constructor(fname, lname){
        super(fname,lname)
        this.superhero = true;
    }
sayhero(){
    if(this.superhero){
        console.log(`${this.fname}  ${this.lname} is a super hero`)
    }
}
}
const widow = new SuperHero('black',"widow") 
widow.sayhero()