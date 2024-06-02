
class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName,lastName,id,scores){
       super(firstName,lastName,idNumber)
       this.testScores = scores
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    
    calculate(){
        console.log("testscores", this.testScores)
if (this.testScores<=100 && this.testScores>=90 ){
    return "O"
}else if (this.testScores<=90 && this.testScores>=80){
    return "E"
}else if (this.testScores<=80 && this.testScores>=70){
    return "A"
}else if (this.testScores<=70 && this.testScores>=55){
    return "P"
}else if (this.testScores<=55 && this.testScores>=40){
    return "D"
}else if (this.testScores<40){
    return "T"
}
    }
    
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
