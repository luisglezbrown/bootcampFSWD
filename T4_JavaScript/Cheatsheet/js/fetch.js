const URL = 'https://jsonplaceholder.typicode.com/users';

const printNames = array=> array.forEach(person => console.log(`Name: ${person.name}`));
const printCities = array=> array.forEach(person => console.log(`City: ${person.address.city}`));
const printLats = array=> array.forEach(person => console.log(`Lat: ${person.address.geo.lat}`));

// fetch(URL).then(r => r.json()).then(data => console.log(data)); //Versión reducida

fetch(URL) // Versión capturando errores
    .then(response => {
        console.log(response);
        if(!response.ok) {
            throw Error('Hay algún problema con la respuesta: ' + response.statusText);
        }
        return response.json();

    })
    .then(data => {
        printNames(data);
        printCities(data);
        printLats(data);
    })
    .catch(error => console.log(error));

console.clear();


// Async / await - Alternativa a then

async function requestURL(url) {
    console.log(1.1);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(1.2);
}

console.log(1);
requestURL(URL);
console.log(2);

// Petición con método HTTP POST en lugar de GET
const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

const newPost = {
    title: 'mi título',
    body: 'mi cuerpo de publicación'
  }

const http = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json' // La clave se pasa como string para que acepte el guión
    },
    body: JSON.stringify(newPost),    
};

fetch(POST_URL, http)
    .then(response => response.json())
    .then(data => console.log(data))