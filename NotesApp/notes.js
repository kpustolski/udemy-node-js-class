const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();

  // Stores duplicates in the duplicateNotes array
  // based on whether the titles match
  // this will run for each note in the notes.json file
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  // No duplicates
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("New title taken!"));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();

  // ALTERNATIVE WAY
  const updatedNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (updatedNotes.length < notes.length) {
    console.log(chalk.green.inverse("Removed note with title " + title + " from notes.json"));
    saveNotes(updatedNotes);
  }
  else {
    console.log(chalk.red.inverse("No note found"));
  }
}

// Pass in the notes array
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    // We know that there is no data if the file is not found.
    // So we'll start adding to an empty array and create the file later
    // in the code
    return [];
  }
};

// Export an object with properties.
// This will allow us to use these properties in other files
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
