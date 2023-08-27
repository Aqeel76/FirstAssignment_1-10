"use strict";
//Aqeel Ahmad
//05-Aug-2023
//This program will generate a list of guestes to be invited and displayed names with invition.
// List of people to be invited for dinner
let guestsList = ["Aqeel Ahmad", "Muhammad Zafir", "Waqas Wain", "Muhammad Rizwan", "Riasat Ali", "Muhammad Faheem"];
// Function to generate and print invitations
function invitations(guests) {
    guests.forEach((guest) => {
        console.log(`\nDear ${guest},\n\nYou are cordially invited to join us for dinner at my place on Saturday.\nWe hope to see you there!\n\nBest regards,\nYour Host`);
        console.log("Mr. & Mrs. Malik Dilawar Khan");
    });
}
// Sending out invitations
invitations(guestsList);
