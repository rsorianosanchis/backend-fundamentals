let empleados = [
    { id: 1, nombre: 'Alejandro' },
    { id: 2, nombre: 'Ricardo' },
    { id: 3, nombre: 'Maria' }
];
let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 }
];

let getEmpleadoById = async(id) => {
    let result = empleados.find(empleado => empleado.id === id);
    if (!result) {
        throw new Error(`No hay empleado para el id: ${id}`);
    } else {
        return result;
    }
}

let getSalario = async(empleado) => {
    let salario = salarios.find(salario => salario.id === empleado.id)
    if (!salario) {
        throw new Error(`no hay salario para ${empleado.nombre}`)
    } else {
        return { name: empleado.nombre, id: empleado.id, salario: salario.salario }
    }
}
let getInfo = async(id) => {
    let empleado = await getEmpleadoById(id);
    let salario = await getSalario(empleado);
    return `El salario de ${empleado.nombre} es de ${salario.salario} $`
}

getInfo(3).then(res => console.log(res)).catch(err => console.log(err))