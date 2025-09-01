const data = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" },
  { id: 5, name: "E" },
  { id: 6, name: "F" },
  { id: 7, name: "G" },
  { id: 8, name: "H" },
  { id: 9, name: "I" },
  { id: 10, name: "J" }
];

//Retrieve First 5 Objects
const firstFive = data.slice(0, 5);
console.log(firstFive);

//  Retrieve 5 Random Objects
const shuffled = data.sort(() => 0.5 - Math.random());
const randomFive = shuffled.slice(0, 5);
console.log(randomFive);
