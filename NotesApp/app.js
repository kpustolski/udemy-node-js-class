// Load file in from the same directory
const getNotes = require("./notes.js");
const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    // options for this command
    title: {
      // customize how this option works
      describe: "Note title",
      demandOption: true, // make --title option required
      type: "string"
    },
    body: {
      describe: "Add the body of the note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    // argv holds the arguments from the options
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note based on its title.",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});


yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
