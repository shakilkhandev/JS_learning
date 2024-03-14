function printName(firstName, lastName) {
    // Base case: if both firstName and lastName are empty, stop recursion
    if (firstName === "" && lastName === "") {
        return;
    }

    // Print the current firstName and lastName
    console.log("The name is : " + firstName + " " + lastName);

    // Call printName recursively with updated arguments
    // substring(1)  removes the first character from the string 
    printName(firstName.substring(1), lastName.substring(1));
    
}

printName("Shakil", "Khan");
