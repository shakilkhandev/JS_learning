const person = {
  name: "Shakil",
  age: 25,
  greet: function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
};

person.greet(); // Output: Hi, I'm Shakil and I'm 25 years old.
