const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const utils = require('./utils')
const notes = require('./notes')
const { argv } = require('yargs')

//Configure app version
yargs.version('1.1.0')
const command = process.argv[2]

let succ = chalk.green.inverse("Success!")
let err = chalk.bold.inverse.blue("This wasn't actually an error!")

// console.log(utils.add(1, 2))
// console.log(utils.name)
// console.log(notes)
// console.log(succ + err)


//Adding commands to the app
//add a note
yargs.command({
    command: "add",
    describe: "Adds a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note content",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{
        notes.addNotes(argv.title, argv.body);
    }
})

//remove a note
yargs.command({
    command: 'remove',
    describe: 'To remove a note',
    builder: {
        title: {
            describe: "Title of the note to be removed.",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.removeNote(argv.title);
    }
})

//list notes
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler() {
        notes.listNotes();
    }
})

//read a note
yargs.command({
    command: 'read',
    describe: 'Reading a note...',
    builder:{
        title: {
            describe: "Title of the note to read",
            demandOption: true,
            type: 'string'
        }
    },
    handler(){
        console.log('Read mode status: ' + notes.readNote(argv.title));
    }
})

yargs.parse()
// console.log(yargs.argv)

