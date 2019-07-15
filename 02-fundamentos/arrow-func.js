// 

// function sumar(a, b) {
//     return a + b;
// }

let sumar = (a, b) => a + b;

let saludar = (nombre) => `Hola Mundo a ${nombre}`;

console.log(sumar(20, 20));
console.log(saludar('Pepe'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneracion',
    getInfo() { return `${this.nombre} ${this.apellido} poder: ${this.poder}` }
}

console.log(deadpool.getInfo());