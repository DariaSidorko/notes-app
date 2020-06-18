
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes.js');


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
  handler: function (argv) {
    console.log('Title', argv.title)
    console.log('Body!', argv.body)
  } 
})

//Create remove command
yargs.command({
  command: 'remove',
  describe:'Remove a note',
  handler: function () {
    console.log('Removing the note!')
  } 
})

//Create remove command
yargs.command({
  command: 'read',
  describe:'Read notes',
  handler: function () {
    console.log('Reading the note!')
  } 
})


//Create remove command
yargs.command({
  command: 'list',
  describe:'List notes',
  handler: function () {
    console.log('Listing the note!')
  } 
})


yargs.parse()

//console.log(yargs.argv)

//customize version