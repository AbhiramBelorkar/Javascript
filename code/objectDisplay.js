/*
    Some solutions to display JavaScript objects are:

    Displaying the Object Properties by name
    Displaying the Object Properties in a Loop
    Displaying the Object using Object.values()
    Displaying the Object using JSON.stringify()
*/

//in a loop
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

for(let x in person){
    console.log(person[x])
}

// Object.values()
const anotherPerson = Object.values(person)
console.log(anotherPerson);


// JSON.stringify()
const json = JSON.stringify(person)
console.log(json);