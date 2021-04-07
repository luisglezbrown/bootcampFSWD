// 1. Crear el constructor del usuario con sus propiedades y métodos.
function User(name, firstLastName, secondLastName, email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount;
    this.incrementProducts = () => this.productsCount++;
    this.emptyProducts = () => this.productsCount = 0;
}


// 2. Rellenar el array con varios usuarios.
const users = [
    new User('Fran', 'Gómez', 'Fernández', 'fgomez@gmail.com', 35, 'Málaga'),
    new User('Felipe', 'D\'utra', 'Pereira', 'grm.horizon@pullmanturcruises.com', 30, 'Lisboa'),
    new User('Yolanda', 'Pelayo', 'Franco', 'ypelayo@chusta.es', 56, 'Madrid'),
]

users.forEach(user => console.log(user.firstLastName));


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