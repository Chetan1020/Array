
const fs=require('fs');
var addNote=()=>
{
console.log('adding note','title','body');
};
module.exports={
addNote
};

var getAll=()=>
{
console.log("Getting all notes");
};
//node app.js list
module.exports={
getAll
};

var remove=()=>
{
console.log("removing all notes");
};
//node app.js list
module.exports={
remove
};

var get=()=>
{
console.log("getting all notes");
};
//node app.js list
module.exports={
get,
};

var addNote=(title)=>
{
 console.log('adding a note',title);
 fs.appendFile('message.txt', title, (err) => {
 if (err) throw err;
 console.log(title,' was appended to file!');
});
}
module.exports={
addNote,

};
