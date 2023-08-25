"use strict";
let fullName = "Muhammad Ali jinnah"; // Declare Variabale
console.log(`Upper Case: ${fullName.toUpperCase()}`); //to display in UPPER CASE.
console.log(`Lower Case: ${fullName.toLowerCase()}`); //to display in Lower Case.
function toTitleCase(inputString) {
    // Split the input string into an array of words
    const words = inputString.toLowerCase().split(" ");
    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // Join the words back into a single string
    return words.join(" ");
}
const titleCaseString = toTitleCase(fullName);
console.log(`Title Case: ${titleCaseString}`); // Output to show in Title Case.
