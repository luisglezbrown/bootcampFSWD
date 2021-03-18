// ------------------ Uso de JS externo ------------------

console.log('Hola desde un script externo');

function saludo () {
    alert('Hola desde un script externo');
    console.log('Has hecho click');
}
document.getElementsByTagName('a').item(2).addEventListener('click', saludo)


// ------------------ Depuración // logging ------------------
// alert('Mensaje');
console.log('Mensaje');


// ------------------ Variables ------------------
// var -> function scope
// let / const -> block scope

function saludar() {
    console.log(`Inicial: ${i}`);

    //comprobar con var y con let para ver diferencias
    for (var i = 0; i<3; i++) {
        console.log(i);
    }
    console.log(`Final: ${i}`);
}

saludar();


console.clear();
// Inicialización
let day;
day = 5;

let monthName = 'Octubre';

let hour, minute, second;

let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [nombre, apellido, edad] = ['Luis', 'Gonzalez', 37]; // Avanzada
console.log(edad, nombre, apellido);
console.log(`Mi nombre es ${nombre}, mi apellido es ${apellido} y tengo ${edad} años.`)


// const -> block scope
const x = 1;
//x = 2; //Error: invalid assignment to const 'x'
/*No se puede definir una const sin inicializar, ya que tendrías que cambiarla más adelante
y no está permitido */


console.clear()
// ------------------ Tipos de datos ------------------

let str = String('I am a string');
let str2 = 'I am another string';
console.log(typeof str, typeof str2, typeof '');

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 7, typeof '7')