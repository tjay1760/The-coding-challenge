const Person = function(first, last) {
    let fName = first;
    let lName = last;
    this.getFullName = function() {
      return `${fName} ${lName}`;
    };
  this.getFirstName = function(){
    return fName;
  }
  this.getLastName= function(){
    return lName
  }
  
  this.setFirstName= function(firstName){
    fName = firstName
  }
  this.setLastName= function(lastName){
    lName=lastName
  }
  this.setFullName= function(first,last){
      fName = first
      lName = last
  }
  };
  // use of getters and setters prevents one from accessing the variables from outsite