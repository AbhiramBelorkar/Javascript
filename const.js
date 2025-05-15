// cannot redeclare, cannot reassign, block scope

/*
    Use const when you declare:

    A new Array
    A new Object
    A new Function
    A new RegExp

    It does not define a constant value. It defines a constant reference to a value.

    Because of this you can NOT:

    Reassign a constant value
    Reassign a constant array
    Reassign a constant object
    
    But you CAN:

    Change the elements of constant array
    Change the properties of constant object
*/

// You can change the elements of a constant array:
const arr = ["ram","sham","ganesh","yash"]
arr[0] = "sham"
console.log(arr);

// arr = ["Toyota", "Volvo", "Audi"];   cannot reassign


const car = {type:"Fiat", model:"500", color:"white"};
car.color = "red";
car.owner = "Johnson";
console.log(car);

// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR