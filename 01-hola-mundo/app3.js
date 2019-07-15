console.log('inicio del programa');

setTimeout(() => {
    setTimeout(() => { console.log('primer timeout') }, 2000)
}, 2000);
setTimeout(() => {
    console.log('segundo timeout');
}, 4000);
setTimeout(() => {
    console.log('tercero timeout');
}, 0);

console.log('fin del programa');