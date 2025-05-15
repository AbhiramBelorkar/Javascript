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
  

