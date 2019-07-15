let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneracion',
    getInfo: function() { return `${this.nombre} ${this.apellido} -poder: ${this.poder}` }
}

let profesor = {
    clase: 'primero',
    asignatura: 'mates',
    alumnos: 37
}

console.log(deadpool.nombre);
console.log(deadpool.getInfo());

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

/*IMPORTANTE*/
/*Con la siguiente linea le cambiamos el nombre a la 
variable que vuene de las propiedades del objeto deadpool*/
let { nombre: name, apellido: surname, poder: power, getInfo } = deadpool;
let { clase: room, asignatura: ämne, alumnos: elever } = profesor;

console.log(name, surname, power);
console.log(room, ämne, elever);