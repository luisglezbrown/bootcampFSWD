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
// Datos primitivos
let str = String('I am a string');
let str2 = 'I am another string';
console.log(typeof str, typeof str2, typeof '');

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 7, typeof '7')

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof 'true');

let undef;
console.log(undef, typeof undef);

let selectedColor = null;   // Útil para limpiar una variable
console.log(selectedColor, typeof selectedColor);

// Objects
let array1 = Array(1, 2, 3);
let array2 = [3, 2, 1];
console.log(array1, array2);
console.log(typeof array1, typeof array2);

console.log(typeof new Date('2021-03-19'));
console.log(typeof new Error('Mensaje de error'));

console.clear();
// ------------------ Strings ------------------
str = 'Hola futuro';
console.log(str, str.length);
console.log(str.indexOf('futuro'), str.indexOf('cadena no presente'));
console.log('La última ocurrencia de "u" está en el índice', str.lastIndexOf('u'));
console.log(str.substring(1,3));


if(str.indexOf('caca') == -1) {
    //eso es que no existe
}

console.log('Hola mundo'.concat('. Adiós mundo.'));
console.log('Hola mundo' + '. Adiós mundo.');

str = str + '. Adiós Mundo'
str += '. Adiós Mundo' // Esto es igual a str = str + '. Adiós Mundo'
console.log(str);

console.log(str.replace('Mundo', 'futuro'));
console.log(str.replaceAll('Mundo', 'futuro'));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`El día de mi cumpleaños es ${day}.`) // String template

//Parsing - Cambiar el tipo a un dato (Ej: cambiar de string a number)
let number = Number('asdasd'); // NaN = Not a Number. No genera error.
console.log(number, typeof number);

number = Number('1000');
console.log(number, typeof number);

number += '1000'; // Al haber dos tipos hace una concatenación, no una suma
console.log(number, typeof number);


// ------------------ Objects ------------------
let person = {       // con las llaves se crean objetos en JS
    name: 'John',
    age: 30,
    blonde: false,
    walk: function() {
        console.log('Hey, estoy andando');
    }, // Previo a EC6
    jump() {
        console.log('Hey, estoy saltando!');
    }
}

//Acceso por punto - Dot notation
console.log(typeof person, person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

person.name = 'Jane';

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

//Acceso por corchetes - Brackets notation
let propertyName = 'age';
console.log(person[propertyName]);

//Ampliación
person.children = ['Marta', 'Pedro'];
console.log(person);
console.log(person.children);
console.log(person.children[1]);
console.log(`Se llama ${person.name} y sus hijos son ${person.children}`);

person.jump();
person.walk();

