// Constructor
function Book(title, author, sales, price) {
    this.id = undefined;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
}


// Variables
let books = [
    new Book('Ready Player One', 'Ernest Cline', 987452, 18),
    new Book('Tomás Nevinson', 'Javier Marías', 123456, 21),
    new Book('Transbordo en Moscú', 'Eduardo Mendoza', 152145, 19),
    new Book('Independencia', 'Javier Cercas', 452785, 20),
    new Book('La Anomalía', 'Herve Le Tellier', 984145, 19),
    new Book('Feria', 'Ana Iris Simón', 462286, 21),
    new Book('El Juego del Alma', 'Javier Castillo', 986332, 14),
    new Book('Reina Roja', 'Juan Gómez Jurado', 485174, 22),
    new Book('Rey Blanco', 'Juan Gómez Jurado', 485174, 22),
    new Book('Loba Negra', 'Juan Gómez Jurado', 485174, 22)
];
let booksToDisplay = books;
let cheapestFirst = true;

// Asigno selectores
const table = document.getElementById('tbody');
const inputTitle = document.getElementById('inputTitle');
const inputAuthor = document.getElementById('inputAuthor');
const inputSales = document.getElementById('inputSales');
const inputPrice = document.getElementById('inputPrice');
const inputFilter = document.getElementById('inputFilter');
const addButton = document.getElementById('addButton');
const sortButton = document.getElementById('sortButton');
const priceCell = document.getElementById('priceCell');
const deleteButtons = document.getElementsByClassName('delete');
const totalPriceCell = document.getElementById('totalPrice');


// Funciones
function fillList() {
    tbody.innerHTML = '';

    booksToDisplay = books.filter(book => book.title.toLowerCase().includes(inputFilter.value.toLowerCase()))

    for (let index = 0; index < books.length; index++) {
        books[index].id = index+1;
    }

    for (const book of booksToDisplay) {
        let newRow = document.createElement('tr');
        for (const key in book) {
            const value = book[key];
            const newField = document.createElement('td');
            newField.textContent = `${value}`;
            newRow.appendChild(newField);
        }

        const newDeleteButton = document.createElement('td');
        newDeleteButton.innerHTML = `<button class="btn btn-danger delete" value="${book.id-1}">Delete</button>`;
        newRow.appendChild(newDeleteButton);
      
        tbody.appendChild(newRow);
    };
    updateTotalPrice();
};
fillList();

function deleteBook (event) {
    if (event.target.tagName === 'BUTTON') {
        books.splice(Number(event.target.value), 1);
    }
    fillList();
}

function addBook () {
    books.push(new Book(
        inputTitle.value, 
        inputAuthor.value, 
        Number(inputSales.value), 
        Number(inputPrice.value)
    ));
    fillList();
    emptyInputs();
};

function emptyInputs() {
    let inputs = document.querySelectorAll('form input');
    for (const input of inputs) {
        input.value = '';
    };
}

function sortByPrice() {
    cheapestFirst ? 
    books.sort((book1, book2) => book1.price - book2.price)
    : books.sort((book1, book2) => book2.price - book1.price);

    fillList();
    cheapestFirst = !cheapestFirst;
    priceCell.innerText = cheapestFirst ? 'Price ▼' : 'Price ▲';
}

function updateTotalPrice() {
    let totalPrice = booksToDisplay.reduce((sum, book) => (sum + book.price), 0);
    totalPriceCell.innerText = `Total price: ${totalPrice}`;
}


// Listeners
addButton.addEventListener('click', addBook);
table.addEventListener('click', deleteBook);
inputFilter.addEventListener('input', fillList);
priceCell.addEventListener('click', sortByPrice);
// sortButton.addEventListener('click', sortByPrice);