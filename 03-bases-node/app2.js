const argv = require('yargs').argv;

//const operacion = require('./multiplicar/multiplicar.js')
const { crearArchivo } = require('./multiplicar/multiplicar.js');

//let base = 2;

let argv2 = process.argv;
// let parametroBase = arg[2];
// let base = parametroBase.split('=')[1];

console.log(argv);
console.log(argv2);



//console.log(module);
//console.log(process.argv);

// console.log(crearArchivo);
// crearArchivo(base)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));