const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log("Array of fruits = : " +fruits);

console.log("Searching for " +fruits[2]);//fruits[2] is "Apple";

let position = fruits.indexOf("Apple") + 1;
console.log("From Start Apple found on : " + position);

position = fruits.lastIndexOf("Apple") + 1;
console.log("From last  Apple found on  : " + position);

console.log("\n--Inserting another fruits'Banana'as 5th item--");
fruits [4]="Banana";

console.log(fruits);
