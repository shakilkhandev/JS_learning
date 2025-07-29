// Define a heavy function
global.aName = function () {
  const start = performance.now();
  while (performance.now() - start < 10000) {
    // Simulate 2 seconds of blocking work
  }
  console.log("✅ aName finished after heavy work");
};

console.log("🔹Before setTimeout");



setTimeout(() => {
  aName(); // Asynchronous scheduling, but blocks when executed
}, 0);



console.log("🔹 After setTimeout");





global.bName = function () {
  const start2 = performance.now();
  let s =1 ;
  while ((performance.now() - start2) < 10000) {
    

  }

 console.log("✅ bName finished after heavy work");
};

bName();