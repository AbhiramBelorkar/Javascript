

/*
    How to Define a JavaScript Object

    Using an Object Literal
    Using the new Keyword
    Using an Object Constructor

    In JavaScript, almost "everything" is an object.

    Objects are objects
    Maths are objects
    Functions are objects
    Dates are objects
    Arrays are objects
    Maps are objects
    Sets are objects
*/ 
// Object literals
const obj = {
    name : "ram",
    age :20,
    "email" : "abc.com"
}

console.log(obj.name);
console.log(obj["age"]);
// console.log(obj.email);
console.log(obj["email"]);


//new keyword
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//
// The object x is not a copy of person. The object x is person.
// The object x and the object person share the same memory address.

//Create an Object
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, 
    eyeColor:"blue"
  }
  
  // Try to create a copy
  const x = person;
  
  // This will change age in person:
  x.age = 10;

// Object.freeze()
Object.freeze(obj)
obj.age = 30
obj.name = "sham"
console.log(obj.age);
console.log(obj.name);

// can also add function inside object
const obj1 = {
    name : "Ganesh",
    age : 25,
    email : "xyz.com",
    greeting : function hello() {  //doesnt matter of function name
        console.log("Hello");
        
    }
}
obj1.greeting(); //remember to add () for calling a function


//concat object
const obj2 = {
    name : "Yash",
    age : 22,
    email : "xyz.com",
    greeting : function hello() {  //doesnt matter of function name
        console.log("Hello");
        
    }
}
console.log(obj2.greeting+'---');
// console.log(obj1);
// console.log(obj1 + obj2); // cannot work
// const obj3 = obj1 + obj2;
// console.log(obj3);
console.log(Object.assign(obj1,obj2))  // add obj2 in obj1
// console.log(obj1)

const obj3 = Object.assign({}, obj1, obj2) //copies properties from the source objects (obj1, obj2) into the target object ({}).
console.log(obj3)
// If obj1 and obj2 have overlapping keys, obj2's values overwrite obj1's.

const obj4 = { a: 1, b: 2 };
const obj5 = { b: 3, c: 4 };

const obj6 = Object.assign({}, obj4, obj5);
console.log(obj6); // { a: 1, b: 3, c: 4 }

obj7 = {...obj4, ...obj5}
console.log(obj7);  // { a: 1, b: 3, c: 4 }


// Object de structuring
const person = {
    name : "rajesh",
    age : 30
}
const {name, age : myage} = person
console.log(name);
console.log(myage);

function greet({ name, age }) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  }
  
  const user = { name: "Anu", age: 28 };
  greet(user); // Hello Anu, you are 28 years old.
  

