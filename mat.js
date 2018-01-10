var Matrix = require('matrixmath/Matrix');

//new matrix
var matrix = new Matrix(3, 3);
console.log(matrix.toLogString());


//new Matrix(opt_rows, opt_cols, opt_setInitial)
var matrix = new Matrix(3, 3, false);
console.log(matrix.toLogString());

//rows
console.log(matrix.rows);

//coloumns
console.log(matrix.cols);

//matrix length
console.log(matrix.length);

