const day = "Thursdayy";

switch(day){
    case "Monday":
        console.log(`Today is ${day}`);
        break;
    case "Tuesday":
        console.log(`Today is ${day}`);
        break;
    case "Wednesday":
        console.log(`Today is ${day}`);
        break;
    case "Thursday":
        console.log(`Today is ${day}`);
        
    case "Friday":
        console.log(`Today is ${day}`);
        break;
    case "Saturday":
        console.log(`Today is ${day}`);
        break;
    case "Sunday":
        console.log(`Today is ${day}`);
        break;
    default:
        console.log("Invalid day");
        break;
}

let expression = 5+5;
console.log(expression);

// Ternary operator

const age = 11;

let ifElseExpression = age >= 18 ? 'Wine🍷' : 'Water💧';
// console.log(`You can drink ${ifElseExpression}`);
const randomString = `Hello I am ${age} year old and I can drink ${age >= 18 ? 'Wine🍷' : 'Water💧'}`;
logger(randomString);

//Functions
// DRY
// Don't Repeat Yourself

function logger(word) {
    console.log(word);
}

logger("Ardit");
logger("Drilon");
logger("Drin");
logger(10);



function calcAge(currentYear, birthYear) {
    return currentYear - birthYear;
}

const arditsAge = calcAge(2023, 1998);
const adnisAge = calcAge(2023, 2002);

console.log(`Ardit is ${arditsAge} year old and Adni is ${adnisAge} year old`);

function yearsUntilRetirement(birthYear){
    const age = calcAge(2023, birthYear);
    if(age <= 65){
        return `You will retire in ${65 - age} years`;
    } else {
        return "You are already retired sir!";
    }
}

console.log(yearsUntilRetirement(1948));

function anothaFunction2(){
    return "Anotha Function"; 
    //Function declaration
}
const anothaFunction = function(){
    return "Anotha Function";
    //Function expression
}
const calcAge2 = (currentYear, birthYear) => `Your age is ${currentYear - birthYear}`;

console.log(calcAge2(2023, 1971))
