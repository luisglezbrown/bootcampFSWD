// 1. Crear el constructor del usuario con sus propiedades y métodos.
function User(name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
    this.incrementProducts = () => this.productsCount++;
    this.emptyProducts = () => this.productsCount = 0;
}


// 2. Rellenar el array con varios usuarios.
const users = [
    new User('Fran', 'Gómez', 'Fernández', 'fgomez@gmail.com', 35, 'Málaga'),
    new User('Felipe', 'D\'utra', 'Pereira', 'grm.horizon@pullmanturcruises.com', 30, 'Lisboa'),
    new User('Yolanda', 'Pelayo', 'Franco', 'ypelayo@chusta.es', 56, 'Madrid'),
]

//users.forEach(user => console.log(user.firstLastName));


/* 3. Creamos el HTML y CSS necesarios y accedemos desde JS a los elementos necesarios del DOM y 
guardamos las referencias. */

const select = document.querySelector('#userSelect');
const list = document.querySelector('#userInfo');
const incrementButton = document.querySelector('#incrementButton');
const emptyButton = document.querySelector('#emptyButton');


// 4. Rellenamos el selector con el nombre de cada usuario.

users.forEach(user => {
    let newOption = document.createElement('option');
    newOption.textContent = user.name;
    select.appendChild(newOption);
});


// 5. Rellenamos la lista con todas las propiedades de un usuario cualquiera.

function fillList(user) {

    list.innerHTML = '';

    for (const key in user) { //for...in itera por las propiedades de un objeto.
        const value = user[key];
        if (typeof value !== 'function') /* (value instanceof Users) */ {
            const newListItem = document.createElement('li');
            newListItem.innerHTML = `<b>${key}:</b> ${value}`;
            newListItem.classList.add('list-group-item');
            //console.log(`key: ${key}, value: ${value}`);
            list.appendChild(newListItem);
    
            // Otra forma: list.innerHTML += `<li class='list-group-item'> <b>${key}:</b> ${value}</li>`
        }
    }
}

function processProducts(event) {
    const selectedUser = users.find(user => user.name === select.value);
    if(event.target.id === 'incrementButton') {
        selectedUser.incrementProducts();
    } else {
        selectedUser.emptyProducts();
    }
    fillList(selectedUser);
}


// 6. Añadir listeners necesarios.

select.addEventListener('change',(event) => {
    //Creamos variable que busca el elemento cuyo valor de nombre es igual al valor de select.
    const selectedUser = users.find(user => user.name === select.value);
    fillList(selectedUser);
});

fillList(users[0]); //Esto se crea para que no aparezca la lista vacía de momento.


incrementButton.addEventListener('click', processProducts);
emptyButton.addEventListener('click', processProducts);


// 7. Si el selector cambia, actualizamos la lista con toda su información.
// 8. Si pulsamos los botones, tendrá que actualizarse el número de productos del usuario seleccionado