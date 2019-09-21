const fs = require("fs");

const getNotes = function() {
  return "Your notes...";
};

// ADD NOTE FUNCTION
const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(note => {
  //   note.title === title;
  // });
  // refactoring the filter method with the find method
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
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

// LIST NOTES FUNCTION
const listNotes = () => {
  const notes = loadNotes();

  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("That note does not exists!");
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
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
