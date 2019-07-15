let empleados = [
    { id: 1, nombre: 'Alejandro' },
    { id: 2, nombre: 'Ricardo' },
    { id: 3, nombre: 'Maria' }
];
let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 }
];

let getEmpleadoById = (id) => {
    return new Promise((resolve, reject) => {
        let result = empleados.find(empleado => empleado.id === id);
        !result ? reject(`no hay empleado para el id: ${id}`) :
            resolve(result)
    });
}

let getSalarioByEmpleado = (empleado) => {
    return new Promise((resolve, reject) => {
        let result = salarios.find(salario => salario.id === empleado.id);
        !result ? reject(`no hay salario para el empleado con id: ${empleado.id} llamado ${empleado.nombre}`) :
            resolve({ nombre: empleado.nombre, salario: result.salario, id: result.id })
    });
};

getEmpleadoById(3).then(data => {
    console.log(data);
    getSalarioByEmpleado(data).then(item => {
        console.log(item);
    }).catch(err => {
        console.log(err);
    })
}).catch(err => {
    console.log(err);
})