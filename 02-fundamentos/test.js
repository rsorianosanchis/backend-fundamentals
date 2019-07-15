let empleados = [
    { id: 1, nombre: 'Alejandro' },
    { id: 2, nombre: 'Ricardo' },
    { id: 3, nombre: 'Maria' }
];
let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 }
];

let getEmpleadoById = (id, cb) => {
    let result = empleados.find(item => item.id === id);
    !result ? cb(`No hay empleado con el ID: ${id}`) :
        cb(null, result)
};

let getSalarioByEmpleado = (empleado, cb) => {
    let result = salarios.find(item => empleado.id === item.id);
    !result ? cb(`No hay salario disponible para el empleado con id: ${empleado.id}`) :
        cb(null, result);
};
//
//
//
getEmpleadoById(1, (err, data) => {
    // err ? console.log(err) :
    //     console.log(`el empleado con id: ${data.id} se llama ${data.nombre}`);
    if (err) {
        console.log(err);
    } else {
        getSalarioByEmpleado(data, (err, res) => {
            if (err) {
                console.log(err);
                return;
            } else {
                let dataout = { nombre: data.nombre, salario: res.salario };
                console.log(dataout);
                return dataout;
            }
        })
    }
})