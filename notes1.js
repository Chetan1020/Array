const titleOptions = {
  describe: 'Title of note',
  demand: true,
 
  
};
const bodyOptions = {
  describe: 'Body of note',
  
  demand: true,
 
 
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];