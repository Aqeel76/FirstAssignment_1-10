//Aqeel Ahmad
// 04 Aug 2023
//This program will get your favorite transportation and print each of them.

let favBike: string[] = ['Yamaha YBR 125Z', 'Honnda CG125', 'Kawasaki 125', 'Suzuki CG150'];
let favCar: string[] = ['Audi', 'BMW', 'Mercedes', 'Honda City'];
let selection = "Car";

if (selection.toLocaleLowerCase() === "bike") {
  favBike.forEach((favBike) => {
    console.log(`My Favorite Bikes are: ${favBike}.`);
  });
}
else if (selection.toLocaleLowerCase() === "car") {
  favCar.forEach((favCar) => {
    console.log(`My Favourite Cars are: ${favCar}.`);
  });
}
else 
  console.log("Please Select Bike or Car");