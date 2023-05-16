// Exercise 1 page 26
"use strict";

let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
];

// a. Searches array using map() function to return only the item name
// and then use forEach() to display list of items

// function itemNames(arrayElement){
//     return arrayElement.item;
// }
// function displayItemNames(arrayElement){
//     console.log(arrayElement);
// }
// let cartItems = cart.map(itemNames);
// cartItems.forEach(displayItemNames);

// b. Determines the total cost of everything in the cart using reduce().
// In the reducer function, remember to account for the possibility if there
// being more than 1 unit (ex. 5 apples rather 1)!

// function getTotalCost(currentTotal, arrayElement){
//     return currentTotal + (arrayElement.price * arrayElement.quantity);
// }
// let sum = cart.reduce(getTotalCost, 0);
// console.log(sum);

// c. Revisit your code for (a) above. Can you sort the list before you display it?

function itemNames(arrayElement){
    return arrayElement.item;
}
function displayItemNames(arrayElement){
    console.log(arrayElement);
}
let cartItems = cart.map(itemNames);
cartItems.sort();
cartItems.forEach(displayItemNames);