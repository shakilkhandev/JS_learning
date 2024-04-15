try {
    // Code that may throw an error
    let result = 10 / a;
// This will throw an error because you can't divide by a without declare it 

    console.log("Result:" + result ); // This line will not execute because the error occurs before it
} catch (error) {
    // Code to handle the error
    console.log("An error occurred:", error.message); // Print the error message
}
