// ------------------ Uso de JS externo ------------------

console.log('Hola desde un script externo');

function saludo () {
    alert('Hola desde un script externo');
    console.log('Has hecho click');
}
//document.getElementsByTagName('a').item(2).addEventListener('click', saludo)


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
    blonde: true,
    walk: function() {
        console.log('Hey, estoy andando');
    }, // Previo a EC6
    jump() {
        console.log('Hey, estoy saltando!');
    },
    presentarse() {
        console.log(`Me llamo ${this.name}, tengo ${this.age} y ${this.blonde ? 'soy rubio' : 'soy moreno.'}`)
    }
}

person.presentarse();

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

// This
const person2 = {
    name: 'Thomas',
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);    //'This' Se refiere al objeto al que pertenece la función.
    }
}

const person3 = {
    name: 'Sarah',
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);    //'This' Se refiere al objeto al que pertenece la función.
    }
}

person2.talk();
person3.talk();


console.clear();
// ------------------ Arrays ------------------
let selectedColors = ['red', 'blue'];
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = 'green'; //Una forma de añadir elementos al array sabiendo la longitud.
console.log(selectedColors, selectedColors.length);

selectedColors.push('violet', 'white'); //Añade el parametro al final del array
console.log(selectedColors, selectedColors.length);

selectedColors.pop(); //Elimina el último elemento del array.
console.log(selectedColors, selectedColors.length);

selectedColors.unshift('white', 'black'); //Añade elementos al inicio del array.
console.log(selectedColors, selectedColors.length);

selectedColors.shift() //Elimina el primer elemento del array.
console.log(selectedColors, selectedColors.length);

selectedColors.sort(); //Ordena alfabéticamente según la tabla ASCII.
console.log(selectedColors, selectedColors.length);

console.log('El rojo está en el índice', selectedColors.indexOf('red')); //Te busca el index en el array del elemento buscado.

console.log(selectedColors.slice(1,3)); //Devuelve una copia de la sección pero no modifica. El segundo parámetro no lo incluye.
console.log(selectedColors, selectedColors.length);

console.log('Los elementos borrados son:', selectedColors.splice(1,3)); //Elimina el número de elementos introducidos en el segundo parametro a partir del primer parámetro (incluido).
console.log('El array se ha quedado así:', selectedColors);


/* Crear un objeto 'niño' que tenga las propiedades nombre, altura, género
y amigos. Amigos estará inicialmente vacío y añadiremos posteriormente
3 elementos con los nombres. También puede perder el último amigo. Después, añadiremos uno extra al inicio*/

let nino = {
    nombre: 'Jordi',
    altura: 1.40,
    genero: 'masculino',
    amigos: [],
    perderAmigo() {
        this.amigos.pop();
    }
}
console.log(nino);

nino.amigos.push('Leo', 'Raul', 'Sonia');
console.log(nino);

nino.amigos.unshift('Sandrita');
console.log(nino);

nino.perderAmigo();
console.log(nino.amigos);


console.clear();
// ------------------ Condicionales ------------------
const randomNumber = 9;
const guessedNumber = '5';

if (randomNumber === guessedNumber) {
    console.log('Has acertado el número');
} else if (randomNumber > guessedNumber){
    console.log('El número secreto es mayor');
} else {
    console.log('El número secreto es menor');
}

//Ternary Operator
let variable = 12 < 10 ? 'el primero es menor' : 'el primero es mayor';
console.log(variable);


//Switch

let option = 3;
switch (option) {
    case 1:
        console.log('Option vale 1');
        break;
    case 2:
        console.log('Option vale 2');
        break;
    case 3:
        console.log('Option vale 3'); 
        break;
    default:
        console.log('otra opción');
        break;
}


console.clear();
// ------------------ Funciones ------------------
//Nombradas
function greet(name, lastName) {
    console.log(`Hola, ${name} ${lastName}. ¿qué tal?`);
}

greet();
greet('Marcos', 'Aurelio');


/* Crear función que devuelva el cuadrado de un número que recibe
por parámetro */ 
function cuadrado(numero) {
    return numero*numero;  
}

console.log(cuadrado(2));


//Anónimas
let numbersArray = [2, 5, 51, 1, 15];
console.log(numbersArray);
numbersArray.sort(); //Me lo ordena según ASCII
console.log(numbersArray);

function orderNumbers(a, b) {
    if (a < b){
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    } 
}

numbersArray.sort(orderNumbers); /* Función nombrada */
console.log(numbersArray);

numbersArray.sort(function (a, b) {return b - a}); /* Función Anónima */
console.log(numbersArray);

numbersArray.sort((a, b) => a - b); /* Función de flecha */
console.log(numbersArray);


//Arrow Functions

function perimeterOfSquareNormal(side) {              //Función normal
    return 4 * side;
}

const perimeterOfSquareAnonima = function (side) {     //Función anónima
    return side * 4;
}

const perimeterOfSquareArrow = side => 4*side;       //Arrow Function
// Si tiene más de un parámetro, debo ponerlos entre paréntesis.
// Si no tiene parámetros simplemento pongo () => ...


console.log(perimeterOfSquareNormal(5));
console.log(perimeterOfSquareAnonima(5));
console.log(perimeterOfSquareArrow(5));


const square = numero => numero * numero;
let numero = 5;
console.log(`El cuadrado de ${num} es ${square(num)}`);


console.clear();
// ------------------ Bucles/Loops ------------------
//For

for (let i = 0; i <= 10; i++) {
    console.log(`Índice: ${i}`);
}

//Definir y rellenar un array con el índice i
let miArray = [];
for (let i = 0; i <= 10; i++) {
    miArray[i] = i;
    console.log(`Índice: ${i} - ${miArray}`);
}

console.log(miArray);

let miArray2 = [];  //Esta es la forma correcta!
for (let i = 0; i <= 10; i++) {
    miArray2.push(i);
    console.log(`Índice: ${i} - ${miArray2}`);
}

console.log(miArray2);

//While
let contador = 0;
while(contador<=10) {
    console.log(contador);
    contador++;
}

//ForEach - Se usa como bucle para los arrays
selectedColors.forEach((value, index) => console.log(`Índice ${index}: ${value}`));

console.log(numbersArray);
numbersArray.forEach(function (value, index) {
    console.log(`Índice ${index}: ${value}`);
})