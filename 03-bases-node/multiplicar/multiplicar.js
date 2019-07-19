const fs = require('fs');



let crearArchivo = async(base) => {
    let result = '';

    for (let i = 1; i <= 10; i++) {
        result += `${base} * ${i} = ${base*i}\n`
    }
    console.log(Number(base));
    // if (Number(base)) {
    //     console.log('base es un numero');

    // } else if (!Number(base)) {
    //     console.log('base NO es un numero');
    //     return;
    // }
    if (!Number(base)) {
        throw new Error(`la base NO es nin gun numero bae: ${base}`)
    }

    if (result === '') {
        throw new Error('no se ha generado ninguna tabla')
    } else {
        fs.writeFile(`./data/db-${base}.txt`, result, (err) => {
            if (err) {
                throw new Error(`No se ha grabado el archivo de la tabla del ${base}`)
            } else {
                console.log('archivo salvado');
                return `db-${base}.txt`
            }
        })
    }
};

module.exports = {
    crearArchivo: crearArchivo
}