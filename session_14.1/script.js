console.log(square(10));

//Function declaration
function square(a){
    return a * a;
}

//Function expression
const square2 = function(a){
    return a * a;
}
console.log(square2(10));

//Arrays
const friend1 = "Driloni";
const friend2 = "Bledi";
const friend3 = "Fisi";
const friend4 = "Blendi";
const friend5 = "Adriani";
const friend6 = "Drini";

const friends = ["Drini", "Adriani", "Blendi", "Fisi", "Bledi", "Driloni"];

console.log(typeof(friends));

//We can store different data types inside an array
const randomArr = [2, "karakter", true, null, friends];
console.log(randomArr[4][1]);

// Add an element to the end of the array
friends.push("Adni");


// Add an element to the start of the array
friends.unshift("Bardhyli");

// Remove the last element of the array
friends.pop();

// Remove the first element of the array
friends.shift();

console.log(friends);

console.log(friends.length)

//Return the last element of the array
console.log(friends[friends.length - 1])

//Finding the index of an element
friends.indexOf("Drini");
console.log(friends[friends.indexOf("Drini")]);

console.log(friends.includes("Arditi"));

/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but contains one "needle".
After your function finds the needle it should return a message (as a string) that says: 
"found the needle at position " plus the index it found the needle.

Test Case(Input --> Output)  
["hay", "junk", "hay", "hay", "more junk", "needle", "random junk"] --> "found the needle at position 5"
*/

function findNeedle(arr){
    if(arr.includes("needle")){
        return `found the needle at position ${array.indexOf("needle")}`;
    } else {
        return "There is no needle in this haystack";
    }
}
const haystack = ["hay", "junk", "needle", "hay", "hay", "more junk", "random junk"];
const junk = ["hay", "junk", "hay", "hay", "more junk", "needle", "random junk"];
console.log(findNeedle(haystack));
console.log(findNeedle(junk));