// Apartado 1
const usersList = document.getElementById('usersList');
const URLComments = 'https://jsonplaceholder.typicode.com/comments'

function fillList (usersArray) {
    for (const user of usersArray) {
        const newItem = document.createElement('li');
        newItem.textContent = `Name: ${user.name}`;
        usersList.append(newItem);
    }
};

fetch(URLComments)
    .then(response => {
        if(!response.ok) {
            throw Error('Hay algún problema con la respuesta: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        fillList(data.slice(0,20));
    })
    .catch(error => console.log(error));




// Apartado 2

const containerApt2 = document.getElementById('containerApt2');
const URLPosts = 'https://jsonplaceholder.typicode.com/posts'

function fillContainer (postsArray) {
    for (const post of postsArray) {
        containerApt2.innerHTML +=
            `<h1>${post.title}</h1>
            <p>${post.body}</p>`
    }
};

fetch(URLPosts)
    .then(response => {
        if(!response.ok) {
            throw Error('Hay algún problema con la respuesta: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        fillContainer(data.slice(0,5));
    })
    .catch(error => console.log(error));


async function fillContainer2() {
    const response = await fetch(URLPosts);
    const postsArray2 = await response.json();
    for (const post of postsArray2.slice(0,5)) {
        containerApt2.innerHTML +=
            `<h1>${post.title}</h1>
            <p>${post.body}</p>`
    }
}
fillContainer2();