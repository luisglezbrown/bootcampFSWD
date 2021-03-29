// 1. Define e inicializa un array con 5 elementos string en una sola línea.
console.log('***** Apartado 1 *****');

let arrayCincoElementos = ['este', 'array', 'contiene', 'cinco', 'strings'];
console.log(arrayCincoElementos);


/* 2. Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por
completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
entero por consola utilizando un string template del tipo: `Longitud: ${}`. */
console.log('***** Apartado 2 *****');

let arrayApartado2 = [];            // Define un array inicialmente vacío.
console.log(`Longitud: ${arrayApartado2.length}, Array completo: ${arrayApartado2}`);
arrayApartado2.push(1, 2, 3);       // Añade tres elementos de tipo number posteriormente.
console.log(`Longitud: ${arrayApartado2.length}, Array completo: ${arrayApartado2}`);
arrayApartado2.splice(0, 1, 4, 5);  // Elimina por completo el primero y añade dos nuevos números al inicio.
console.log(`Longitud: ${arrayApartado2.length}, Array completo: ${arrayApartado2}`);


/* 3. Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en
caso contrario. */
console.log('***** Apartado 3 *****');

function booleanChecker(argumento) {
    if (typeof argumento === 'boolean') {
        return true;
    } else {
        return false;
    }
}

let pruebaApt3 = 5;
console.log(booleanChecker(pruebaApt3));


/* 4. Escribe una función que devuelva la longitud de un string recibido por argumento. */
console.log('***** Apartado 4 *****');

const stringLength = argumento => {
    if (typeof argumento !== 'string') {
        return 'El argumento debe ser un string'
    } else {
        return argumento.length;
    }
}

let pruebaApt4NoString = 5;
console.log(stringLength(pruebaApt4NoString));

let pruebaApt4String = 'Esto es una prueba del apartado 4';
console.log(stringLength(pruebaApt4String));


/* 5. Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos. */
console.log('***** Apartado 5 *****');

const secondsConvert = minutes => minutes * 60;

let pruebaApt5 = 15;
console.log(secondsConvert(pruebaApt5));


/* 6. Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá
directamente). */
console.log('***** Apartado 6 *****');

function isEven (argumento) {
    if (typeof argumento !== 'number') {
        return 'El argumento debe ser un número'
    } else {
        if (argumento % 2 === 0) {
            return argumento;
        } else {
            return argumento + 1;
        }
    }
}

let pruebaApt6 = 4;
console.log(isEven(pruebaApt6));


/* 7. Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
obviar los años bisiestos. */
console.log('***** Apartado 7 *****');

const ageToDaysConverter = age => age * 365;

let pruebaApt7 = '37';
console.log(ageToDaysConverter(pruebaApt7));


/* 8. Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
de diferentes longitudes */
console.log('***** Apartado 8 *****');

const returnLastElement = array => array[array.length - 1];

console.log(arrayApartado2);
console.log(returnLastElement(arrayApartado2));

console.log(arrayCincoElementos);
console.log(returnLastElement(arrayCincoElementos));


/* 9. Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. */
console.log('***** Apartado 9 *****');

function cuentaPatas (numPollos, numVacas, numCerdos) {
    const patasBipedos = numPollos * 2;
    const patasCuadrupedos = (numVacas + numCerdos) * 4;
    return patasBipedos + patasCuadrupedos;
}

console.log(cuentaPatas(10, 10, 10));


/* 10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo. */
console.log('***** Apartado 10 *****');

function sameType (arg1, arg2) {
    if (typeof arg1 === typeof arg2) {
        return `Los argumentos son del mismo tipo (${typeof arg1})`;
    } else {
        return `Los argumentos son de distinto tipo (${typeof arg1} vs ${typeof arg2})`
    }
};

console.log(sameType(pruebaApt7, pruebaApt5));
console.log(sameType(pruebaApt6, pruebaApt5));


/* 11. Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
palabra de la frase original. Investigar método existente de los strings para este fin. */
console.log('***** Apartado 11 *****');

function stringToArray (string) {
    const arrayDePalabras = string.split(' ');
    return arrayDePalabras;
}

let pruebaApt11 = 'Esto es una prueba para el apartado 11'
console.log(stringToArray(pruebaApt11));

const stringToArrayV2 = (string, separador) => string.split(separador);
console.log(stringToArrayV2(pruebaApt11, ' '));


/* 12. Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código
postal, calle, número, planta, y número de puerta. */
console.log('***** Apartado 12 *****');

let address1 = {
    provincia: 'Madrid',
    ciudad: 'Madrid',
    municipio: 'Madrid',
    codigoPostal: 28028,
    calle: 'Agustín Durán',
    numero: 16,
    planta: 0,
    puerta: 'A'
};

let address2 = {
    provincia: 'Málaga',
    ciudad: 'Málaga',
    municipio: 'Málaga',
    codigoPostal: 29007,
    calle: 'Santa Rosa de Lima',
    numero: 22,
    planta: 13,
    puerta: 'A'
};

console.log(address1);
console.log(address2);


/* 13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (toplevel domain) como, 
por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que reciba por argumento un string 
y devuelva un objeto con dos propiedades: domain y tld. */  
console.log('***** Apartado 13 *****');

function parseDomain (string) {
    const arrayDePalabras = string.split('.');
    return {domain: arrayDePalabras[0], tld: arrayDePalabras[1]};
}

const parseDomainV2 = string => {
    return {domain: string.split('.')[0], tld: string.split('.')[1]};
}

let pruebaApt12 = 'codespaceacademy.com'
console.log(parseDomain(pruebaApt12));
console.log(parseDomainV2(pruebaApt12));


/* 14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
mismo tipo de dato. Debemos usar el operador lógico “&&”. */ 
console.log('***** Apartado 14 *****');

function strictEquality (atr1, atr2) {
    if (atr1 == atr2 && typeof atr1 == typeof atr2) {
        return true;
    } else {
        return false;
    }
}

console.log(strictEquality("5", 5));
console.log(strictEquality(8, 5)); 
console.log(strictEquality(5, 5)); 


/* 15. Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso
contrario. */ 
console.log('***** Apartado 15 *****');

const sameLength = (string1, string2) => string1.length === string2.length ? true : false;

console.log(sameLength('prueba', 'prueba2'));


/* 16. Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length. */
console.log('***** Apartado 16 *****');

const hasStringContent = string => string ? 'El string tiene contenido' : 'El string está vacío';
// Un string vacío se considera falso en un contexto booleano.

console.log(hasStringContent('prueba'));
console.log(hasStringContent(''));
console.log(hasStringContent(' '));


/* 17. Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes:
• while
• for
• for of
• forEach. */
console.log('***** Apartado 17 *****');

let index17 = 0;
while (index17 < arrayCincoElementos.length) {
    
    console.log(arrayCincoElementos[index17]);
    index17++;    
}

for (let index = 0; index < arrayCincoElementos.length; index++) {
    console.log(arrayCincoElementos[index]);    
}

for (const iterator of arrayCincoElementos) {
    console.log(iterator);
}

arrayCincoElementos.forEach(element => console.log(element));


/* 18. Crea una función que reciba un string y un número N y devuelva el string original repetido N veces. */
console.log('***** Apartado 18 *****');

const concatenador = (string, repeticiones) => string.repeat(repeticiones);

console.log(concatenador('Jesús está pidiendo memes. ', 5));


/* 19. Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva
la cuenta final. */
console.log('***** Apartado 19 *****');