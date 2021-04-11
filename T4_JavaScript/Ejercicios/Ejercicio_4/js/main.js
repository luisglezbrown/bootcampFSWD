function Book(title, author, sales, price) {
    this.id = undefined;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
}

let books = [
    new Book('Ready Player One', 'Ernest Cline', 987452, 18.90),
    new Book('Tomás Nevinson', 'Javier Marías', 123456, 21.75),
    new Book('Transbordo en Moscú', 'Eduardo Mendoza', 152145, 19.85),
    new Book('Independencia', 'Javier Cercas', 452785, 20.80),
    new Book('La Anomalía', 'Herve Le Tellier', 984145, 19.47),
    new Book('Feria', 'Ana Iris Simón', 462286, 21.75),
    new Book('El Juego del Alma', 'Javier Castillo', 986332, 14.15),
    new Book('Reina Roja', 'Juan Gómez Jurado', 485174, 22.95),
    new Book('Rey Blanco', 'Juan Gómez Jurado', 485174, 22.95),
    new Book('Loba Negra', 'Juan Gómez Jurado', 485174, 22.95)
];


// Asigno selectores
const table = document.getElementById('tbody');
const inputTitle = document.getElementById('inputTitle');
const inputAuthor = document.getElementById('inputAuthor');
const inputSales = document.getElementById('inputSales');
const inputPrice = document.getElementById('inputPrice');
const addButton = document.getElementById('addButton');
const deleteButtons = document.getElementsByClassName('delete');



function fillList() {
    tbody.innerHTML = '';

    for (let index = 0; index < books.length; index++) {
        books[index].id = index+1;
    }

    for (const book of books) {
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
}

function emptyInputs() {
    let inputs = document.getElementsByTagName('input');
    for (const input of inputs) {
        input.value = '';
    }
}

addButton.addEventListener('click', addBook);
table.addEventListener('click', deleteBook);