let empleados = [
    { id: 1, nombre: 'Alejandro' },
    { id: 2, nombre: 'Ricardo' },
    { id: 3, nombre: 'Maria' }
];
let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 }
];
//
let getEmpleadoById = (id, cb) => {
    let result = empleados.find(item => item.id === id);
    !result ? cb(`no existe trabajador con id: ${id}`) :
        cb(null, result)
};

// getEmpleadoById(1, (err, resp) => {
//     err ? console.log(err) : console.log(resp);
// })



let getSalarioByEmpleado = (empleado, cb) => {
    let result = salarios.find(item => item.id === empleado.id);
    !result ? cb(`no existe salario para el trabajador con id: ${empleado.id}`) :
        cb(null, { name: empleado.nombre, id: empleado.id, lon: result.salario })
};

getEmpleadoById(2, (err, resp) => {
    err ? console.log(err) : getSalarioByEmpleado(resp, (err, resp) => {
        err ? console.log(err) : console.log(resp);;

    });
})