// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'This file was created by Node.js! My name is Himanshu')
// fs.appendFileSync('notes.txt', ' This text is appended uses appendFileSync')

// const add=require('./utils')
// const sum =add(4,16)
// console.log(sum)


// const validator = require('validator')
const getNotes=require('./notes')
const msg = getNotes()
console.log(msg)
// console.log(validator.isURL('cognizant.com'))

const chalk=require('chalk')
console.log(chalk.green('Success!'))
console.log(chalk.red.bold.underline('Hello', 'world'))