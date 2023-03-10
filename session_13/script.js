const isThirsty = true;

if(isThirsty){
    console.log("Drink some water 💧");
} else {
    console.log("Stay hydrated then!");
}

// const day = prompt("What day is today?");
let day = "Sunday";

if(day === "Monday"){
    console.log("Today is Monday");
} else if (day === "Tuesday") {
    console.log("Today is Tuesday");
} else if (day === "Wednesday"){
    console.log("Today is Wednesday");
} else if (day === "Thursday"){
    console.log("Today is Thursday");
} else if (day === "Friday"){
    console.log("Today is Friday");
} else if (day === "Saturday" || day === "Sunday"){
    console.log("Today is a weekend day");
} else {
    console.log("Invalid day");
}

// String concatination

let sentence1 = "Today is such a";
let sentence2 = " beautiful day";

console.log(sentence1 + sentence2);

const firstName = "Adrian";
const lastName = "Balaj";
const age = 24;
const job = "DevOps";


console.log("Hello my name is " + firstName + " " + lastName + " and I am a " + age + " year old " + job);

// Template literals
console.log(`Hello my name is ${firstName} ${lastName} and I am a ${age} year old ${job}. My birthyear is ${2023 - age}`);
console.log(`Hello this is 

asdasdasd

asdasd
asdasd

asdasd
`)
console.log('I finished my high school at "Sami Frasheri High School"');
`""" ''' ''asdakslmdalksd klasd "" asdjkasdm" " "ASD "${22-10}`

const firstNamePerson = "Ardit";

// Type coercion and type conversion
const random = 5;
const randomNumber = String(random);
console.log(typeof(randomNumber), randomNumber);

const x = "10";
const y = "10";
const z = x + y;
console.log(z, typeof(z));

// Truthy and falsy values
// Falsy values are:
// 0
// "" - empty string
// NaN - not a number
// Null
// Undefined
// false

const money = 10;
const friends = null;

if (money){
    console.log("Go on a vacation 🚢");
}else{
    console.log("Go get a job!");
}

if (friends){
    console.log("Go chill with them");
}else{
    console.log("Get some friends!");
}

console.log(`Dolphins are the winners with ${dolphinsScore} points`)