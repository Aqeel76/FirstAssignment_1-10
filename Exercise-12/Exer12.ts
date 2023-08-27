//Aqeel Ahmad
//04 August 2023
//This program will print my friends list using array and also display with personalized message

let myfriends: string[] = ['Sajid','Yasir','Habib','Assad'];
let pmsg = "Assalam-o-Alikum, Dear ";

myfriends.forEach((myfriends) => {
    console.log(pmsg + myfriends + "!"); 
});
