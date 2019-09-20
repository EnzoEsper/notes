const yargs = require("yargs");
const fs = require("fs");
const notes = require("./notes.js");

// TODO: WE NEDD ADD NOTES, REMOVE NOTES, READ A NOTE AND LIST ALL NOTES

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "body of the note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// create list command
yargs.command({
  command: "list",
  describe: "List notes",
  handler() {
    console.log("Listing all the notes!");
  }
});

// create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log("Reading a note!");
  }
});

// console.log(process.argv);
// console.log("-----------");
yargs.parse();
