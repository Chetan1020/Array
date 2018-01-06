const _= require ('lodash');
//var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

//console.log(_.unzip(zipped));
// => [['a', 'b'], [1, 2], [true, false]]
// => 0
//console.log(zipped);



var a=_.toArray({ 'a': 1, 'b': 2 });
// => [1, 2]

console.log(_.toArray('abc'));
// => ['a', 'b', 'c']

console.log(_.toArray(1));
// => []

console.log(_.toArray(null));
// => []
