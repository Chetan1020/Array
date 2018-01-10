const lodash=require('lodash');
const notes=require('./notes.js');
const yargs=require('yargs');
const argv = yargs.argv;
var command = argv._[0];
if (command === 'add') {
 console.log("add an item");
  argv.title 
  // argv.body
} else if (command === 'list') {
  console.log("list an item");
} else if (command === 'read') {
  console.log("read an item");
  // argv.title = requested note title
} else if (command === 'remove') {
  console.log("remove an item");
  // argv.title = requested note title
}