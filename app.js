const lodash=require('lodash');
const notes=require('./notes.js');
//console.log(process.argv);
//var cmd=process.argv[2];
//console.log(cmd);
//var cmd=process.argv;
const yargs=require('yargs');
//console.log('yargs',yargs.argv);
const argv = yargs.argv;
var command = argv._[0];
//if (command === 'add') {
 //notes.addNote(argv.title, argv.body);
//}
//if (command === 'list') {
 //notes.getAll();
//}
if (command === 'get') {
 notes.get(argv.title, argv.body);
}
//if (command === 'remove') {
 //notes.remove(argv.title, argv.body);
//}
console.log('Command: ', command);
console.log(yargs.argv);
//console.log('Yargs', argv);
//console.log('Starting notes.js');

var addNote = (title, body) => {
 console.log('Adding note', title, body);
};
//console.log(process.argv[2]);
//if (cmd =="add")
//{
//console.log("add an item");
//}
//else if(cmd == "list")
//{
//console.log("list an item");
//}
//else if(cmd == "read")
//{
//console.log("read an item");
//}
//else if(cmd == "remove")
//{
//console.log("remove an item");
//}
//else{
//console.log("cmd not recognized");
//}
//notes.addNote(argv.title,argv.body);
if(command==='read'){
 notes.addNote(argv.title);
}  