// Completa una lista desordenada de los primeros 20 elementos.
/* const usersList = document.getElementById('usersList');
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
    .catch(error => console.log(error)
); */


// -------- Ejercicio 6.1
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
const PAGE_SIZE = 20;

// Variables
let posts = [];
let currentPage = 1;

//Selectores
const postsContainer = document.getElementById('postsContainer');
document.querySelectorAll('.previousPage').forEach(button => button.addEventListener('click', changePage));
document.querySelectorAll('.nextPage').forEach(button => button.addEventListener('click', changePage));

//Utilidades
function fillContainer () {
    
    const newPagePosts = paginate(posts, PAGE_SIZE, currentPage)
    postsContainer.innerHTML = '';
    newPagePosts.forEach(post =>
    postsContainer.innerHTML +=
        `<h3>${post.id} ${post.title}</h3>
        <p>${post.body}</p>`
    );
    
};

function changePage(event){
    if (event.target.className === 'previousPage' && currentPage > 1) {
        currentPage--;
    } else if (event.target.className === 'nextPage' && currentPage < posts.length / PAGE_SIZE) {
        currentPage++;
    };
    fillContainer();
};

function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    // https://stackoverflow.com/questions/42761068/paginate-javascript-array
    return array.slice((page_number - 1) * page_size, page_number * page_size);
};

fetch(POSTS_URL)
.then(response => response.json())
.then(data => {
    posts = [...data];
    fillContainer()
});


// -------- Ejercicio 6.2
// Constantes
const LOGIN_URL = 'https://reqres.in/api/login';
const USERS_URL = 'https://reqres.in/api/users';

// Selectores
const emailInput = document.querySelectorAll('input')[0];
const passwordInput = document.querySelectorAll('input')[1];
const usersList2 = document.getElementById("usersList2");
document.querySelector('#loginButton').addEventListener('click', login);

function login(event) {
    event.preventDefault();

    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };
    
    const config = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(userInfo)
    }

    fetch(LOGIN_URL, config)
    .then(response => response.json())
    .then(data => data.error ? alert(data.error) : fetchAllUsers()
    );                                             // Esto es segunda parte del apartado

    /*  fetch(LOGIN_URL, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value
        })
    }) */
}

async function fetchAllUsers() {
    /*     fetch(USERS_URL)
    .then(response => response.json())
    .then(data => console.log(data)) */

    let response = await fetch(USERS_URL);
    let data = await response.json();
    
    let users = [];

    for (let page = 1; page <= data.total_pages; page++) {
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data);
    }
    console.log(users);

    usersList2.innerHTML = '';
    users.forEach(user => usersList2.innerHTML += `<li>${user.email}</li>`);
};

//Alternativa para recuperar todas las páginas de una API usando .then()
let users = [];

function fetchAllUsersV2(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(newData => {
        users = users.concat(newData.data);

        if(newData.page < newData.total_pages) {
            fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`)
        } else {
            usersList2.innerHTML = '';
            users.forEach(user => usersList2.innerHTML += `<li>${user.email}</li>`);    
        }
    })
}