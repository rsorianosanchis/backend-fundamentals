let empleados = [
    { id: 1, nombre: 'Alejandro' },
    { id: 2, nombre: 'Ricardo' },
    { id: 3, nombre: 'Maria' }
];
let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 }
];

let getSalarioByEmpleado = (empleado, cb) => {
    let salario = salarios.find(salario => salario.id === empleado.id);
    if (!salario) {
        cb(`No existe salario para empleado con id: ${empleado.id} y nombre ${empleado.nombre}`)
    } else {
        let result = { empleado: empleado.nombre, salario: salario.salario }
        cb(null, result)
    }
}

let getEmpleadoById = (id, cb) => {
    //filter me devuelve un array con el objeto dentro.
    /*let result = empleados.filter(item => { return item.id === id });
    if (result.length === 0) {
        cb('no hay empledo con ese id en la base de datos');
    } else {
        cb(null, result);
    }*/
    //find me devuelve un objeto ( el primero que encuentra en el array)
    let result = empleados.find(empleado => empleado.id === id);
    if (!result) {
        cb(`No existe usuario con el ID: ${id}`)
    } else {
        cb(null, result)
    }

    //result = []
};

getEmpleadoById(2, (err, data) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(data);
        getSalarioByEmpleado(data, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        })
        return;
    }
});