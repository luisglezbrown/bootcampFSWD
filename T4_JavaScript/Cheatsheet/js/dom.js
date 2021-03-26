console.clear();
// -------- DOM (Document Object Model) --------
// Basics
console.log(document);
console.log(document.domain);
console.log(document.URL);

console.log(document.title);
document.title += ' - (DOM)';
console.log(document.title);


// Selectors
const family = document.getElementsByTagName('div');
console.log(family);

const grandParent = document.getElementById('grandparent');
console.log(grandParent);

const parents = document.getElementsByClassName('parent');
const parent1 = parents[0];
const parent2 = document.getElementsByClassName('parent')[1];
console.log(parent1, parent2);

const hijos = document.getElementsByClassName('child');
console.log(hijos);

let element = document.querySelector('div#grandparent>.parent>div.child#child4')
console.log(element);

parent1.style.backgroundColor = 'grey';

let childrens = document.querySelectorAll('.child');
for (let item of childrens) {
    item.style.backgroundColor = 'green';
}

const changeBackground = (element, color) => element.style.backgroundColor = color;
changeBackground(childrens[0], 'red');
changeBackground(parent2, 'cyan');
changeBackground(parent2.children[1], 'whitesmoke');

/* hijos[0].parentNode.style.backgroundColor = 'pink'; */ //.parentNode salta al padre
parent2.children[1]; //.children[i] selecciona al hijo[indice]
parent1.children[1].previousElementSibling  /* .previousElementSibling selecciona al hermano anterior, 
también está .nextElementSibling que selecciona al siguiente hermano.*/
grandParent.children[1].previousElementSibling.lastElementChild /* .lastElementChild selecciona al último hijo, 
también está .firstElementChild que selecciona al primer hijo.*/


// Properties
hijos[0].innerHTML = "Child 1v2";

console.log(hijos[0].innerHTML = 'texto v2');
console.log(hijos[0].textContent = 'texto v2');


console.clear();
console.log('Classlist: ', parent1.classList);

parent1.classList.remove('bg-dark');
console.log('Classlist: ', parent1.classList);

parent1.classList.add('bg-red');
console.log('Classlist: ', parent1.classList);

parent1.classList.toggle('rounded'); //Si no la tiene la pone, si la tiene la quita
console.log('Classlist: ', parent1.classList);


parent1.setAttribute('propiedad', 'valor-de-la-propiedad'); //Si existe sobreescribe, si no existe lo crea.


//Create / Remove elements
let myDiv = document.createElement('div');  //Crea el elemento pero no está en el DOM aún
myDiv.id = 'new-Div';                       //Añado propiedades al elemento creado
myDiv.classList.add('child');
myDiv.textContent = 'child 2.5';

parent1.appendChild(myDiv);     //Anexa el elemento creado como hijo a parent1.

myDiv2 = myDiv.cloneNode(true)      //Crea un nuevo nodo igual que el anterior
parent2.appendChild(myDiv2);        //Si ponemos true, crea el clon incluyendo a los descendientes.
myDiv2.textContent = "Child 5";

myDiv.remove();   //Elimina el elemento del DOM.

let myDiv3 = myDiv.cloneNode();
parent2.before(myDiv3);          //Anexa el elemento creado (myDiv3) antes de parent2.
parent2.after(myDiv.cloneNode()) //Anexa el elemento creado (myDiv.cloneNode()) después de parent2.


/* Crear una función que me devuelva un nodo nuevo y que reciba etiqueta e
ID */
function newNode(tag, id) {
    let nodo = document.createElement(tag);
    nodo.id = id;
    return nodo;
}

let newDiv = newNode('div', 'identificador1');
parent1.appendChild(newDiv);
parent2.appendChild(newNode('table', 'tabla-ejericio'));


//Events
const colorButton = document.getElementsByTagName('button')[0]; //[0] porque el "getElements" me devuelve un array.
colorButton.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    document.body.classList.toggle('bg-red'); //document.body selecciona directamente el elemento body. 
    console.log(event.target.tagName);
    console.log(`X: ${event.clientX} | Y: ${event.clientY}`);
    console.log(`Alt: ${event.altKey} | Shift: ${event.shiftKey} | Ctrl: ${event.ctrlKey}`);

});

const emailInput = document.querySelector('#emailInput');

emailInput.addEventListener('focus', inputListener);
emailInput.addEventListener('blur', inputListener);

function inputListener(e) {
    console.log('tipo de evento: ', e.type);
    if (e.type === 'focus') {
        e.target.classList.add('bg-red');
    } else if (e.type === 'blur') {
        e.target.classList.remove('bg-red');
    }
}

const changeTitle = e => {
    document.querySelectorAll('h1')[2].textContent = emailInput.value;
}

emailInput.addEventListener('keydown', inputListener);
emailInput.addEventListener('keyup', changeTitle);

const container = document.getElementById('container');
container.addEventListener('mouseover', inputListener);
container.addEventListener('mouseout', inputListener);

function coords (e) {
    const h1 = document.querySelectorAll('h1')[3];
    h1.textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
}

document.body.addEventListener('mousemove', coords);



/*Quiero hacer un forEach de family pero no es un array,
de modo que uso for...of*/
// for (let familyMember of family) {
//     console.log(familyMember);
// }

