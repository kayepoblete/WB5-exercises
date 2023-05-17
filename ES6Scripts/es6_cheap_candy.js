// Exercise 1 page 31
"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
    {product: "Skittles", price: 3.78},
    {product: "Sour Patch Kids", price: 6.48},
    {product: "Twizzlers", price: 4.74},
    {product: "Reese's Pieces", price: 3.98},
    {product: "Jolly Rancher", price: 3.24},
    {product: "Haribo Gummy bears", price: 6.98},
];
// Which candies costs less than $4.00?
let cheapCandies = products.filter(candy => candy.price < 4.00);
cheapCandies.forEach(candy => console.log(candy.product));

// Which candies has "M&M" its name?
let mnms = products.filter(candy => candy.product.indexOf("M&M") > -1);
mnms.forEach(candy => console.log(candy.product));

// Do we carry "Swedish Fish"?
let swedishFish = products.find(candy => {
    if(candy.product === "Swedish Fish"){
        console.log("Yes we have Swedish Fish.");
    }
});