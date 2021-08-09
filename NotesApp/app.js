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
const yargs = require("yargs");
const chalk = require("chalk");

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      // options for this command
      title: {
        // customize how this option works
        describe: "Note title",
        demandOption:true, // make --title option required
        type: "string"
      },
      body: {
        describe: "Add the body of the note",
        demandOption: true,
        type: "string"
      }
    },
    handler: function(argv){
      // argv holds the arguments from the options
      console.log("Title: " + argv.title);
      console.log("Body: " + argv.body);
    }
  });

yargs.command({
    command: "remove",
    describe: "Removing a note",
    handler:function(){
        console.log("Removing a note");
    }
});

yargs.command({
    command: "list",
    describe: "List your notes",
    handler: function(){
        console.log("Listing all notes");
    }
});

yargs.command({
    command: "read",
    describe: "Read a note",
    handler:function(){
        console.log("Reading a note");
    }
});

yargs.parse();