// Create an object:
const person = {
  firstName: "Shakil",
  lastName: "Khan",
  age: 26,
  eyeColor: "black",
  //creating a object method to return fullname 
  fullname : function(firstName){
      let fname = this.firstName+" "+this.lastName ;
      
      return fname ;
  }
};
          // accessing the object properties,methods and printing on the console
console.log ("Full Name : " + person.fullname()+ " \nAge : " + person.age);





