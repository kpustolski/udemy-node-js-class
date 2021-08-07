// const fs = require(`fs`); // load in file system module
// var path = "notes.txt";

// fs.writeFileSync(path, 'This file was created by Node.js.');

// //Append a message to notes.txt
// fs.appendFileSync(path, "\nHello there!");
// ---

// Load file in from the same directory
// const add = require("./utils.js");

// const sum = add(4, -2);

// console.log(sum);
// ---
// Load file in from the same directory
const getNotes = require("./notes.js");
const validator = require("validator");

const msg = getNotes();

console.log(msg);

console.log("Is url valid: " + validator.isURL("https/mead.io"));
console.log("Is email valid: " + validator.isEmail("myEmail@google.com"));