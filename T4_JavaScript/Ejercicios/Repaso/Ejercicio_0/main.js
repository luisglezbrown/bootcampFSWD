const exerciseHeader = () => {console.log(`**** Apartado ${exerciseNumber} *****`); exerciseNumber++};
let exerciseNumber = 1;

/* 1.Define e inicializa un array con 5 elementos string en una sola línea. */
exerciseHeader();

const arrApartado1 = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

/* 2.Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente.
Elimina por completo el primero y añade dos nuevos números al inicio. 
En cada paso, imprime la longitud y el array entero por consola utilizando un string template del tipo: `Longitud: ${}`. */
exerciseHeader();

let arrApartado2 = [];
console.log(arrApartado2, `Longitud: ${arrApartado2.length}`);
arrApartado2.push(1, 2, 3);
console.log(arrApartado2, `Longitud: ${arrApartado2.length}`);
arrApartado2.splice(0, 1, 4, 5);
console.log(arrApartado2, `Longitud: ${arrApartado2.length}`);


/* 3.Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en caso contrario. */
exerciseHeader();

function isBoolean (argumento) {
    return typeof argumento === 'boolean';
}

console.log(isBoolean(0));


/* 4.Escribe una función que devuelva la longitud de un string recibido por argumento. */
exerciseHeader();

const stringLength = string => string.length;

console.log(stringLength('prueba'));


/* 5.Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos. */
exerciseHeader();

const minsToSegs = minutes => minutes * 60;

console.log(minsToSegs(7));


/* 6.Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá directamente). */
exerciseHeader();

const evenNumber = num => num % 2 === 0 ? num : num + 1; 

console.log(evenNumber(-3));


/* 7.Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes obviar los años bisiestos. */
exerciseHeader();

const ageToDays = age => age * 365;

console.log(ageToDays(37));


/* 8.Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays de diferentes longitudes. */
exerciseHeader();

const lastElement = array => array[array.length-1];

console.log(lastElement(arrApartado1));
console.log(lastElement(arrApartado2));
console.log(lastElement(['prueba', 'para', 'ejericio', 8]));


/* 9.Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy frecuentemente, 
pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). 
Tu función recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. */
exerciseHeader();

const countLegs = (pollos, vacas, cerdos) => pollos * 2 + (vacas + cerdos) * 4;

console.log(countLegs(5, 2, 8));


/* 10.Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo. */
exerciseHeader();

const sameType = (arg1, arg2) => typeof arg1 === typeof arg2;

console.log(sameType(1, 2));
console.log(sameType('1', 2));
console.log(sameType(true, false));


/* 11.Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una palabra de la frase original. 
Investigar método existente de los strings para este fin. */
exerciseHeader();

const phraseToArray = phrase => phrase.split(' ');

console.log(phraseToArray('Esto es una prueba para el ejercicio 11'));


/* 12.Inicializa dos objetos, address1 y address2 con las propiedades: 
provincia, ciudad, municipio, código postal, calle, número, planta, y número de puerta. */
exerciseHeader();

const address1 = {
    provincia: 'Málaga',
    ciudad: 'Málaga',
    municipio: 'Málaga',
    codigoPostal: 29007,
    calle: 'de la alegría',
    número: 69,
    planta: 1,
    puerta: 6
}

const address2 = {
    provincia: 'Madrid',
    ciudad: 'Getafe',
    municipio: 'Getafe',
    codigoPostal: 28007,
    calle: 'de la prueba',
    número: 96,
    planta: 1,
    puerta: 6
}

console.log(address1);
console.log(address2);
console.log(typeof address1);


/* 13.Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (top-level domain) como, por ejemplo .com / .es / .org, etc. 
Crea una función que se llame parseDomain() que reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. */
exerciseHeader();

function parseDomain (string) {
    return {
        dominio: string.split('.')[0],
        tld: string.split('.')[1]
    }
}

console.log (parseDomain('google.com'));


/* 14.Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando dicha funcionalidad. 
Crea una función que devuelva true si dos números tienen el mismo valor y el mismo tipo de dato. Debemos usar el operador lógico “&&”. */
exerciseHeader();

const strictEquality = (arg1, arg2) => arg1 == arg2 && typeof arg1 == typeof arg2;

console.log(strictEquality("5",5));
console.log(strictEquality(5,5));


/* 15.Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso contrario. */
exerciseHeader();

const sameLength = (string1, string2) => string1.length === string2.length;

console.log(sameLength('prueba', 'prueba'));
console.log(sameLength('prueba', '1234567'));


/* 16.Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length. */
exerciseHeader();

const isEmptyString = string => string ? false : true;
console.log(isEmptyString(''));
console.log(isEmptyString(' '));
console.log(isEmptyString('hola!'));


/* 17.Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes: •while •for •for of •forEach. */
exerciseHeader();

// for
console.log('Con for:');
for (let index = 0; index < arrApartado1.length; index++) {
    console.log(arrApartado1[index]);
};

// for of
console.log('Con for of:');
for (const element of arrApartado1) {
    console.log(element);
}

// forEach
console.log('Con forEach:');
arrApartado1.forEach(element => console.log(element));

//while
console.log('Con while:');
let indexApt17 = 0
while (indexApt17 < arrApartado1.length) {
    console.log(arrApartado1[indexApt17]);
    indexApt17++;
}


/* 18.Crea una función que reciba un string y un número N y devuelva el string original repetido N veces. */
exerciseHeader();

const repeatString = (string, repeticiones) => string.repeat(repeticiones)

console.log(repeatString('hola, ', 2));


/* 19.Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva la cuenta final. */
exerciseHeader();

const getVoteCount = object => object.upVotes - object.downVotes;

console.log(getVoteCount({upVotes:35,downVotes:15}));


/* 20.Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo de cada uno de los elementos. */
exerciseHeader();

function getTypes(array) {
    let typesArray = [];
    for (const element of array) {
        typesArray.push(typeof element);
    }
    return typesArray;
}

const getTypesV2 = array => array.map(element => typeof element);

console.log(getTypes(["I'mlearningJSinaBootcamp🚀",7.5,{},0,undefined,[],"codespace"]));
console.log(getTypesV2(["I'mlearningJSinaBootcamp🚀",7.5,{},0,undefined,[],"codespace"]));


/* 21.Función que dado un array de números con formato stringdevuelva un array con los números ya parseados. */
exerciseHeader();

const getParsedNumbers = arrayOfStrings => arrayOfStrings.map(string => Number(string));

console.log(getParsedNumbers(["1.5","10","0"]));
console.log(typeof getParsedNumbers(["1.5","10","0"])[1]);


/* 22.Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o igual que cero 
y “Negativo” en caso contrario. Usa el operador ternario. */
exerciseHeader();

const posOrNeg = num => num >= 0 ? 'Positivo' : 'Negativo';

console.log(posOrNeg(1));
console.log(posOrNeg(0));
console.log(posOrNeg(-1));

/* 23.Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice. */
exerciseHeader();

const elementRemover = (array, index) => array.splice(index, 1);

let pruebaApt23 = ['index 0', 52, 'me van a borrar', true, []];
console.log(pruebaApt23);
elementRemover(pruebaApt23, 2);
console.log(pruebaApt23);


/* 24.Usando la función del apartado anterior, crea otra función que dado un array de números y un número a filtrar, 
devuelva un array borrando todos las apariciones de dicho número. */
exerciseHeader();

const filterNumber = (array, numberToFilter) => {
    array.forEach((element, index) => {
        if (element === numberToFilter) {
            elementRemover(array, index);
        };
    });
};

let pruebaApt24 = [5, 6, 7, 8, 5, 9];
filterNumber(pruebaApt24, 5);
console.log(pruebaApt24);


