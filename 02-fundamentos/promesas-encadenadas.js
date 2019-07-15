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
        let result = empleados.find(item => item.id === id);
        !result ? reject(`no hay empleado con id:${id}`) :
            resolve(result);
    });
}

let getSalarioByEmpleado = (empleado) => {
    return new Promise((resolve, reject) => {
        let result = salarios.find(item => empleado.id === item.id);
        !result ? reject(`no hay salrio para ${empleado.nombre} con id: ${empleado.id}`) :
            resolve({ name: empleado.nombre, id: empleado.id, salario: result.salario })
    });
};

getEmpleadoById(3).then(res => getSalarioByEmpleado(res)).then(res => console.log(res)).catch(err => console.log(err));