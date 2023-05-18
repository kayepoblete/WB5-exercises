// Exercise 2 page 31
"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
];
// Who is the Academy Member whose ID is 187?
// let member187 = academyMembers.find(actor => actor.memID === 187);
// console.log(member187.name);

// Who has been in at least 3 films?
// let actorsWith3Films = academyMembers.filter(actor => actor.films.length >= 3);
// actorsWith3Films.forEach(actor => console.log(actor.name));

// Who has a name that starts with "Bob"?
// let bobs = academyMembers.filter(actor => actor.name.startsWith("Bob"));
// bobs.forEach(actor => console.log(actor.name));

// HARDER: Which Academy Members have been in a film
// that starts with "A"
let actorsA = academyMembers.filter(actor => actor.films.includes("A"));
actorsA.forEach(actor => actor.name);