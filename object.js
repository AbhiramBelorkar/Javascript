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


