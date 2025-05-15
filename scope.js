let a = 10
var b = 20
const c = 30

if(true){
    let a = 100;  //let maintains the global and block scope, cannot redeclare
    // let a = 600;
    var b = 200;    // var has global scope and you can redeclare var variable
    var b = 500;
    const c = 300   // maintains scope, cannot redeclare, cannot change value
    // c = 900;

    console.log("Inner " + a);
    console.log("Inner " + b);
    console.log("Inner " + c);
}

console.log(a);
console.log(b);
console.log(c);


if(true){
    const username = "Ram"
    if(username == "Ram"){
        const age = 20
        console.log(username + age);
        
    }
    // console.log(age); // will give error, cannot access inner properties in outer, example: icecream
    
}
// console.log(username); //cannot access inner properties in outer


console.log(add(5));

function add(num){
    console.log("Hi " + num);
}

/*
Calls add(5):
    Prints "Hi 5" inside the function.
Then logs the return value of add(5):
    Since there's no return, it's undefined.
*/


// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }

//  does not work with function expression