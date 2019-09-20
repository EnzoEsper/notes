const fs = require("fs");

const getNotes = function() {
  return "Your notes...";
};

// ADD NOTE FUNCTION
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => {
    note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title already exists");
  }
};

// REMOVE NOTE FUNCTION
const removeNote = title => {
  const notes = loadNotes();

  const newNotes = notes.filter(note => note.title !== title);

  if (notes.length === newNotes.length) {
    console.log("That note not exists");
  } else {
    saveNotes(newNotes);
    console.log("Note deleted! >:)");
  }
};

// SAVE THE NOTES TO THE notes.json FILE
const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// LOAD THE NOTES FROM THE notes.json FILE
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
