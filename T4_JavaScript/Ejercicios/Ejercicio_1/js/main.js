//  Apartado 1 - Partimos de una HTML con un div vacío.
//  Con JS, añadir dos elementos p con un texto dentro.

const initialDiv = document.getElementsByTagName('div')[0];

let pElement = document.createElement('p');
let pElement2 = pElement.cloneNode();

pElement.textContent = 'Texto 1';
pElement2.textContent = 'Texto 2';

initialDiv.appendChild(pElement);
initialDiv.appendChild(pElement2);

console.log(document);


// Apartado 2 - Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.
let button1 = document.getElementsByTagName('button')[0];

function changeBackground(e) {
    document.body.style.backgroundColor='grey';
}

button1.addEventListener('click', changeBackground);


// Apartado 3 - Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img. Al hacer click en 
// cada URL, cambiará la imagen a la que contenga dicha URL.
const lis = document.getElementsByTagName('li');
const myImg = document.getElementsByTagName('img')[0];

lis[0].addEventListener('click', () => myImg.src = lis[0].innerText);
lis[1].addEventListener('click', () => myImg.src = lis[1].innerText);
lis[2].addEventListener('click', () => myImg.src = lis[2].innerText);


// Apartado 4 - Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
const inputApt4 = document.getElementById('inputApt4');
const buttonApt4 = document.getElementById('buttonApt4');
const paragraphApt4 = document.getElementById('paragraphApt4');

function copyText() {
    paragraphApt4.textContent = inputApt4.value;
}

buttonApt4.addEventListener('click', copyText);


// 4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.
const inputApt4b = document.getElementById('inputApt4b');
const paragraphApt4b = document.getElementById('paragraphApt4b');

function copyText4b() {
    paragraphApt4b.textContent = inputApt4b.value;
}

inputApt4b.addEventListener('keyup', copyText4b);