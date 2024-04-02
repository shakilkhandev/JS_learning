// Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

// Prompt the user to enter temperature
var input = prompt("Enter the temperature in Fahrenheit:");

// Check if input is not null (user canceled the prompt returns null)
if (input !== null) {
    // Convert input to a number
    var fahrenheit = parseFloat(input);
    
    // Check if input is a valid number
    if (!isNaN(fahrenheit)) {
        var celsius = toCelsius(fahrenheit);
        console.log("The temperature in Celsius is " + celsius.toFixed(2));
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
} else {
    console.log("User canceled the input.");
}
