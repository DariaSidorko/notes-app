
const fs = require('fs');
const chalk = require('chalk');

const notes = 'My notes';

const getNote = () => {
  return notes;
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title)
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('No title taken'));
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
} 

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
  } catch (e) {
    return [];
  }
  
}

const removeNote = (title) => { 
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title != title)
  if (notesToKeep.length != notes.length){
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse('Note is removed!'));
  }
  else {
    console.log(chalk.red.inverse('No such note!'));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes: "))
  notes.forEach(note => {
    console.log(chalk.grey(note.title));
  });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
      console.log(chalk.inverse(note.title))
      console.log(note.body)
    } else {
      console.log(chalk.red.inverse("Not Found!"))
    }
  }


module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};