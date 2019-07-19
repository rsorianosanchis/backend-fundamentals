const fs = require('fs');
const crearFn = require
    // const fs = require('express');
    // const fs = require('fs');

let base = 0;
let result = '';
for (let i = 1; i <= 10; i++) {
    result += `${base} * ${i} = ${base*i}\n`;


}

fs.writeFile(`./data/data-base${base}.txt`, result, (err) => {
    if (err || result === '') {
        throw new Error('No se ha grabado el archivo')
    } else {
        console.log(`la tabla del ${base} ha sido creado`);
    }
});