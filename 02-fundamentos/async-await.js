/*EN RESUMEN */
/*La parte no comentada es la fundamental:
Cuando una promesa espera dentro de si misma un dato que viene de otra promesa
 podemos hacer que se detenga en ese punto */



// let getNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Fernando')
//     })
// };
// let getNombre = async() => {
//     //undefinded.nombre;
//     throw new Error('no existe un usuario con ese Id');
//     return 'Fernando';

// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('Fernando') }, 3000)
    });
};
let saludo = async() => {
    let nombre = await getNombre();
    return `Hola mi amigo ${nombre}`;

}

saludo().then(item => {
    console.log(item)
})