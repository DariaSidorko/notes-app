
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js')



// add, remove, read, list

//Creat add command
yargs.command({
  command: 'add',
  describe:'Add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  } 
})

//Create remove command
yargs.command({
  command: 'remove',
  describe:'Remove a note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler (argv) {
    notes.removeNote(argv.title)
  } 
})

//Create read command
yargs.command({
  command: 'read',
  describe:'Read notes',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    notes.readNote(argv.title)
  } 
})


//Create list command
yargs.command({
  command: 'list',
  describe:'List notes',
  handler() {
    notes.listNotes();
  } 
})


yargs.parse()

//console.log(yargs.argv)

//customize version