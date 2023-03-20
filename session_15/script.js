// Objects
const arditArray = [
    "Ardit",
    "Demolli", 
    "24", 
    ["Drila", "Fisi", "Bledi", "Roro", "Adni"]
];

console.log(arditArray[0]);

const arditObject = {
    firstName: "Ardit",
    lastName: "Demolli",
    age: 24,
    friends: ["Drila", "Fisi", "Bledi", "Roro", "Adni"]
}

console.log(arditObject.firstName);
console.log(arditObject.lastName);
console.log(arditObject.friends[4]);

const person = {
    firstName: 'Ardit',
    lastName: 'Demolli',
    age: 22,
    nationality: 'american',
    visitedCountries: ['Spain', 'Germany', 'Italy', 'Montenegro'],
    job: 'programmer/teacher' 
}

//John Doe a 27 year old programmer visited 3 countries.

console.log(`${person.firstName} ${person.lastName} a ${person.age + 2} year old ${person.job} visited ${person.visitedCountries.length} countries.`);

console.log(arditObject["firstName"]);
console.log(arditObject["lastName"]);

// const userInput = prompt("What do you wanna know about Ardit, choose between firstName, lastName, age or friends");

const coffeeMachine = {
    brand: "Gaggia",
    model: "Classic pro",
    color: "silver",

    makeCoffee: function(coffeeSize){
        if(coffeeSize === 's' || coffeeSize === 'S'){
            return "Short espresso";
        }else if(coffeeSize === 'm' || coffeeSize === 'M'){
            return "Medium espresso";
        }else if(coffeeSize === 'l' || coffeeSize === 'L'){
            return "Large espresso";
        }else if(coffeeSize === 'd' || coffeeSize === 'D'){
            return "Double espresso";
        }else{
            return "Invalid input";
        }
    },
    about: function(){
        return `I am a ${this.color} colored ${this.model} ${this.brand}`;
    }
}
// I am a silver colored Classic pro Gaggia
coffeeMachine.brand;
coffeeMachine.makeCoffee("m");
console.log(coffeeMachine.makeCoffee("m"));
console.log(coffeeMachine.makeCoffee("l"));
console.log(coffeeMachine.about());

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    BMI: null,
    calcBMI: function(){
        this.BMI = this.mass / this.height**2;
        return this.mass / this.height**2;
    } 
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    BMI: null,
    calcBMI: function(){
        this.BMI = this.mass / this.height**2;
        return this.mass / this.height**2;
    } 
}

john.calcBMI();
mark.calcBMI();

console.log(john.BMI);
console.log(mark.BMI);

if(john.BMI > mark.BMI){
    console.log(`John's BMI ${john.BMI} is higher than Mark's ${mark.BMI}`);
} else {
    console.log(`Mark's BMI ${mark.BMI} is higher than John's BMI ${john.BMI}`);
}

// console.log("Doing benchbress, repetition 1");
// console.log("Doing benchbress, repetition 2");
// console.log("Doing benchbress, repetition 3");
// console.log("Doing benchbress, repetition 4");
// console.log("Doing benchbress, repetition 5");
// console.log("Doing benchbress, repetition 6");
// console.log("Doing benchbress, repetition 7");
// console.log("Doing benchbress, repetition 8");

for(let i = 1; i <= 3; i++){
    console.log(`Doing benchpress, set ${i}`);
    for(let j = 1; j<=10; j++){
        console.log(`Doing benchpress, repetition ${j}`);
    }
}

for(let i = 0; i <= 10; i++){
    if(i === 5) continue;
    console.log(i);
}

for(let i = 0; i <= 10; i++){
    if(i % 2 === 0) continue;
    console.log(i);
}
for(let i = 0; i <= 10; i++){
    if(i % 2 !== 0) continue;
    console.log(i);
}

let i = 0;

while(i<=10){
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++;
}while(i<=10)