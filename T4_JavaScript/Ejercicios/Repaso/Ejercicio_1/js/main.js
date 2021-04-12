/* 1. Partimos de un HTML con un div vacío. Con JS, añadir dos elementos p con un texto dentro. */
const divApt1 = document.getElementsByTagName('div')[0];
const newParagraph = document.createElement('p');
const newParagraph2 = document.createElement('p');

newParagraph.innerText = 'Texto dentro del párrafo 1';
newParagraph2.innerText = 'Texto dentro del párrafo 2';

divApt1.appendChild(newParagraph);
divApt1.appendChild(newParagraph2);


/* 2. Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML. */
const buttonApt2 = document.querySelector('button');
buttonApt2.onclick = () => {document.body.style.backgroundColor = 'teal'};


/* 3. Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img. Al hacer click en
cada URL, cambiará la imagen a la que contenga dicha URL. */
const listApt3 = document.querySelector('ul');
const imgApt3 = document.getElementsByTagName('img')[0];

listApt3.addEventListener('click', e => imgApt3.src = e.target.innerText);


/* 4. Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.*/

