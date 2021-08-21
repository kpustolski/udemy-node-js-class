const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  // No duplicates
  if (!duplicateNote) {
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

const removeNote = (title) => {
  const notes = loadNotes();

  // ALTERNATIVE WAY
  const updatedNotes = notes.filter((note) => (note.title !== title));

  if (updatedNotes.length < notes.length) {
    console.log(chalk.green.inverse("Removed note with title " + title + " from notes.json"));
    saveNotes(updatedNotes);
  }
  else {
    console.log(chalk.red.inverse("No note found"));
  }
}

// Pass in the notes array
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
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

const listNotes = () => {
  console.log(chalk.inverse("Your Notes: "));

  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {

  const notes = loadNotes();
  const findNote = notes.find((note) => note.title === title);

  if (!findNote) {
    console.log(chalk.red.inverse("No note with title '" + title + "' found"));
    return;
  }

  console.log(chalk.inverse(title));
  console.log(findNote.body);
}

// Export an object with properties.
// This will allow us to use these properties in other files
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
