// immediately invoked function expressions
// Immediately executes right after it's defined.

(
    function hi(name){
        console.log("Hi " + name)
    }
)("Ram")



// arrow function
(() => {
    console.log("IIFE with arrow function");
  })();
  