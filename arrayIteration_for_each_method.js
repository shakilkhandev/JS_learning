const numbers = [33, 1, 3, 11, 35]; // Array containing integers

let txt = ""; // Initialize an empty string to store  values

// Iterate over each element of the numbers array
numbers.forEach(myFunction);

// Function to concatenate each value from the array to the txt variable
function myFunction(value) {
  txt += value + " "; // Concatenate value with a space
}

console.log(txt); // Output the concatenated string containing all values
