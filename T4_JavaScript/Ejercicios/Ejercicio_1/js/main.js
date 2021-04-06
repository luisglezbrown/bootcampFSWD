/*  Apartado 1 - Partimos de una HTML con un div vacío.
Con JS, añadir dos elementos p con un texto dentro. */
const initialDiv = document.getElementsByTagName('div')[0];

let pElement = document.createElement('p');
let pElement2 = pElement.cloneNode();

pElement.textContent = 'Texto 1';
pElement2.textContent = 'Texto 2';

initialDiv.appendChild(pElement);
initialDiv.appendChild(pElement2);

/* Apartado 2 - Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML. */
let button1 = document.getElementsByTagName('button')[0];

function changeBackground(e) {
    document.body.style.backgroundColor = 'grey';
}

button1.addEventListener('click', changeBackground);


/* Apartado 3 - Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img. Al hacer click en 
cada URL, cambiará la imagen a la que contenga dicha URL. */
const lis = document.getElementsByTagName('li');
const myImg = document.getElementsByTagName('img')[0];

lis[0].addEventListener('click', () => myImg.src = lis[0].innerText);
lis[1].addEventListener('click', () => myImg.src = lis[1].innerText);
lis[2].addEventListener('click', () => myImg.src = lis[2].innerText);

/* const changeImage = e => image.src = e.target.textContent;
lis[0].addEventListener('click', changeImage);
lis[1].addEventListener('click', changeImage);
lis[2].addEventListener('click', changeImage); */

/* const list = document.querySelector("ul");
const image = document.querySelector("img");

const changeImage = e => image.src = e.target.textContent;

list.addEventListener("click", changeImage); */

/* Apartado 4 - Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo. */
const inputApt4 = document.getElementById('inputApt4');
const buttonApt4 = document.getElementById('buttonApt4');
const paragraphApt4 = document.getElementById('paragraphApt4');

function copyText() {
    paragraphApt4.textContent = inputApt4.value;
}

buttonApt4.addEventListener('click', copyText);


/* 4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario. */
const inputApt4b = document.getElementById('inputApt4b');
const paragraphApt4b = document.getElementById('paragraphApt4b');

function copyText4b() {
    paragraphApt4b.textContent = inputApt4b.value;
}

inputApt4b.addEventListener('input', copyText4b);


/* 5. De forma similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres */
const textareaApt5 = document.getElementById('textareaApt5');
const paragraphApt5 = document.getElementById('paragraphApt5');

function check15Char() {
    if (textareaApt5.value.length <= 15) {
        paragraphApt5.textContent = `El texto no tiene más de 15 caracteres (${textareaApt5.value.length})`;
    } else {
        paragraphApt5.textContent = `El texto tiene más de 15 caracteres (${textareaApt5.value.length})`;
    }
}

textareaApt5.addEventListener('keyup', check15Char);


/* 6.Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir un botón. Al pulsar el botón nos validará si el número es par o no.
En caso negativo, cambiar los bordes del input a rojo. Para revertir el estado de una propiedad, podemos utilizar el valor “revert” o dejarla vacío. */
const inputApt6 = document.getElementById('inputApt6');
const buttonApt6 = document.getElementById('buttonApt6');
const paragraphApt6 = document.getElementById('paragraphApt6')

function isEven() {
    inputApt6.style.borderColor = 'revert';
    if (inputApt6.value % 2 === 0) {
        paragraphApt6.textContent = ` ${inputApt6.value} es un número PAR`;
    } else {
        paragraphApt6.textContent = ` ${inputApt6.value} es un número IMPAR`;
        inputApt6.style.borderColor = 'red';
    }
};

buttonApt6.addEventListener('click', isEven);


/* 7.Partiendo de una lista ul, crear 10 li con un texto indicando el número del elemento (“Elemento X”) usando un bucle for. */
const ulApt7 = document.getElementById('ulApt7');

for (let index = 0; index < 10; index++) {
    newLi = document.createElement('li');
    newLi.textContent = `Elemento ${index + 1}`;
    ulApt7.appendChild(newLi);
};


/* 8.Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. 
Si pulso primero el botón y luego el enlace, se me abre en una nueva pestaña. */
const aApt8 = document.getElementById('aApt8');
const buttonApt8 = document.getElementById('buttonApt8');

const newWindow = () => aApt8.setAttribute('target', '_blank');

buttonApt8.addEventListener('click', newWindow);


/* 9.Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, verde y azul. 
Al seleccionar un color del select, cambiar el color del párrafo. */
const pApt9 = document.getElementById('pApt9');
const selectApt9 = document.getElementById('selectApt9');

function selectBackground() {
    pApt9.style.backgroundColor = selectApt9.value;
    selectApt9.value === 'red' || selectApt9.value === 'green' ? pApt9.style.color = 'white' : pApt9.style.color = 'revert';
};

selectApt9.addEventListener('change', selectBackground);


/* 10.Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualizada
el número de elementos que se han generado, los que son pares y los que son impares. */
const buttonApt10 = document.getElementById('buttonApt10');
const numerosGenerados = document.getElementById('numerosGenerados');
const ulPares = document.getElementById('ulPares');
const ulImpares = document.getElementById('ulImpares');

let arrayPares = [];
let arrayImpares = [];

function apartado10() {
    let randomNumber = Math.floor(Math.random() * 100);
    randomNumber % 2 === 0 ? arrayPares.push(randomNumber) : arrayImpares.push(randomNumber);

    numerosGenerados.textContent = `Se han generado ${arrayPares.length + arrayImpares.length} números`;

    if (randomNumber % 2 === 0) {
        newLi = document.createElement('li');
        newLi.textContent = `${arrayPares[arrayPares.length - 1]}`;
        ulPares.appendChild(newLi);
    } else {
        newLi = document.createElement('li');
        newLi.textContent = `${arrayImpares[arrayImpares.length - 1]}`;
        ulImpares.appendChild(newLi);
    }
}

buttonApt10.addEventListener('click', apartado10);


/* 11.Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón. 
Al pulsar el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe, lo añadirá al principio. */
const ulApt11 = document.getElementById('ulApt11');
const inputApt11 = document.getElementById('inputApt11');
const buttonApt11 = document.getElementById('buttonApt11');
let numbersList = [1, 15, 20, 35, 78];

for (let index = 0; index < numbersList.length; index++) {
    newLi = document.createElement('li');
    newLi.textContent = `${numbersList[index]}`;
    ulApt11.appendChild(newLi);
}

function addToList () {
    numberToJoin = Number(inputApt11.value);
    if (numbersList.indexOf(numberToJoin) === -1) {
        numbersList.push(numberToJoin);
        newLi = document.createElement('li');
        newLi.textContent = `${numberToJoin}`;
        ulApt11.appendChild(newLi);
    } else {
        window.alert('Ooops! El número ya está en la lista');
    }
}

buttonApt11.addEventListener('click', addToList);


/* 12.Crearemos una clase .btnen CSS que le de ciertos estilos a un botón. 
Al hacer clicken el botón haremos “toggle” o alternaremos esa clase, es decir, 
si está presente la quitaremos y si no está, la añadiremos. */