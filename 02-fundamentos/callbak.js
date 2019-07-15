let getUsuarioByAge = (edad, cb) => {
    usuarios = [{
        nombre: 'Maria',
        edad: 25,
        job: 'doctor',
        saludo() { `Hola me llamo ${nombre} tengo ${edad} y trbajo como ${job}` }
    }, {
        nombre: 'Fernando',
        edad: 45,
        job: 'musico',
        saludo() { `Hola me llamo ${nombre} tengo ${edad} y trbajo como ${job}` }
    }, {
        nombre: 'Berta',
        edad: 45,
        job: 'atleta',
        saludo() { `Hola me llamo ${nombre} tengo ${edad} y trbajo como ${job}` }
    }];
    let result = [];

    usuarios.map(usr => {
        if (usr.edad === edad) {
            result.push(usr);
        }
    })
    if (result.length === 0) {
        cb(`no hay ningun usuario con ${edad} años en la base de datos`)
    } else {
        cb(null, result)
    }
};
//
//
//
let age = 25;
getUsuarioByAge(age, (err, result) => {
    if (err) {
        console.log(err);
        return
    } else {
        console.log(result);
        result.map(item => {
            console.log(item.nombre);

        })

    }
});