//Aqeel Ahmad
//05-Aug-2023
//This program will generate a list of guestes to be invited and displayed names with invition and also updated list and display name of the guest who couldn't come.

// List of people to be invited for dinner
let guestsList: string[] = ["Aqeel Ahmad", "Muhammad Zafir", "Waqas Wain", "Muhammad Rizwan"];

// Function to generate and print invitations
function invitations(guests: string[]): void {
  guests.forEach((guest) => {
    console.log(`Dear ${guest}, You are cordially invited to join us for dinner at my place on Saturday.We hope to see you there! Best regards,\nYour Host! Mr. & Mrs. Malik`);
  });
}
// Sending out invitations to the original guests
console.log("Invitations to the original guests:");
invitations(guestsList);

// Update the guest list with the replacement guest
let updatedGuests: string[] = [...guestsList];
let guestWhoCantMakeIt: string = "Waqas Wain"; // Assuming Waqas Wain not coming
let indexToRemove: number = updatedGuests.indexOf(guestWhoCantMakeIt);

if (indexToRemove !== -1) {
  updatedGuests.splice(indexToRemove, 1);
}

// Sending out invitations to the updated guests
console.log("\nUpdated invitations with the replacement guest:");
invitations(updatedGuests);

// Print statement at the end of the program
console.log(`Unfortunately, ${guestWhoCantMakeIt} couldn't coming and join with us at dinner.`);
