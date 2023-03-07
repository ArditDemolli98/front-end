/* 
Multiple
line
comments
*/ 
// Single line comments
// Values

2
"Ardit asdajksd a,.d .asd,. a,.sd "
true
false

// Variables and naming conventions
let firstName = "Ardit";
let age = 25;

let x = "5";
let y = 3;

let lastName;

console.log(firstName, age);
console.log(x-y);

let job1 = "Programmer";
let job2 = "Teacher";

let myFirstJob = "Programmer";
let mySecondJob = "Teacher";

// Data Types
/*
1) Number
2) String
3) Boolean
4) Null
5) Undefined
6) Big int
7) Symbol 
*/
// Operator to check data type
console.log(typeof(myFirstJob));

let computer = "HP";
console.log(computer);
computer = null;
console.log(computer);

computer = 16;
console.log(computer);

firstName = "Filan";

// let vs const vs var

const school = "Gjimnazi i specializuar...";

console.log(school);

// school = "Sami frasheri";
console.log(school);

let something = "Just something";
something = "Something else";

var greeting = "Hello";

console.log(greeting = "Pershendetje");

// Operators

//Arithmetical operators
// Addition +
// Substraction -
// Multiplication *
// Division /
// Exponentiation **
// Modulus %
// Increment ++
// Decrement --
let i = 1;
i++;
i++;
console.log(i);

i--;
console.log(i);

// Assignment operators
// =
// +=
// -=
// *=
// /=

i = 10;
// i = i + 20;
i += 20;
console.log(i);

// Comparisson operators
// Greater than >
// Less than <
// Loosly Equal ==
// Strictly equal ===
// Not equal !=
// Strictly not equal !==

console.log(10==="10");

// Swapping values of two variables
let a = 10;
let b = 20;
let c;
c = b;
b = a;
a = c;
console.log(a);
console.log(b);


/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
Store Mark's and John's mass and height in variables
Calculate both their BMIs using the formula (you can even implement both versions)
Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

let marksHeight = 1.88;
let marksWeight = 95;

let johnsHeight = 1.76;
let johnsWeight = 85;

let marksBMI = marksWeight / marksHeight**2;
let johnsBMI = johnsWeight / johnsHeight**2;

console.log(marksBMI, johnsBMI);

let markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);