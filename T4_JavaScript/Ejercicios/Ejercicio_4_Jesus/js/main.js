// Book Constructor
function Book(id, title, author, sales, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
}

//Data initialization
let books = [
    new Book(1, 'Ready Player One', 'Ernest Cline', 987452, 18.90),
    new Book(2, 'Tomás Nevinson', 'Javier Marías', 123456, 21.75),
    new Book(3, 'Transbordo en Moscú', 'Eduardo Mendoza', 152145, 19.85),
    new Book(4, 'Independencia', 'Javier Cercas', 452785, 20.80),
    new Book(5, 'La Anomalía', 'Herve Le Tellier', 984145, 19.47),
    new Book(6, 'Feria', 'Ana Iris Simón', 462286, 21.75),
    new Book(7, 'El Juego del Alma', 'Javier Castillo', 986332, 14.15),
    new Book(8, 'Reina Roja', 'Juan Gómez Jurado', 485174, 22.95),
    new Book(9, 'Rey Blanco', 'Juan Gómez Jurado', 485174, 22.95),
    new Book(10, 'Loba Negra', 'Juan Gómez Jurado', 485174, 22.95)
];

//Selectors
const booksTbody = document.getElementById('books-body');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const salesInput = document.getElementById('salesInput');
const priceInput = document.getElementById('priceInput');
const addBookButton = document.getElementById('addBookButton');
const addBookForm = document.getElementById('addBookForm');

function updateTable() {
    // Vaciamos el tbody por completo
    booksTbody.innerHTML = '';

    // Generamos de nuevo todas las filas
    books.forEach(book => {
        booksTbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td>
                <button class='btn btn-danger' id='${book.id}'>Remove</button>
            </td>
        </tr>`;

    });
}

booksTbody.onclick = e => {
    if(e.target.tagName === 'BUTTON') {
        books = books.filter(book => book.id != e.target.id);
        updateTable();
    }
};

updateTable();

// Process form and add a new book
addBookButton.addEventListener('click', e => {
    e.preventDefault(); // Para que el botón submit no actualice la página
    
    const newID = books[books.length-1].id + 1; // Para generar un id
                  //    Accedo al id del último elemento de mi array 
                  //    y le sumo 1

    books.push(new Book(
        newID, 
        titleInput.value, 
        authorInput.value, 
        salesInput.value, 
        priceInput.value)
    );

    updateTable();

    addBookForm.reset(); // Método que vacía los inputs de un form.
});