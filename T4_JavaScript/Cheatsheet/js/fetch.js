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