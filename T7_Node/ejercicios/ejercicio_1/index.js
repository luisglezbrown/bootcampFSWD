require("./config/config");
const express = require("express");

// 1.Usaremos la librería de express()
const app = express();

let users = [];

app.use(express.json());

// 3.Endpoint GET de un usuario. Devolverá un objeto JSON
app.get("/users", (req, res) => {
    const user = {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
    }
    
    res.json({ok: true, results: users});
});


// 4.Endpoint PUT de un usuario al que le pasaremos la ID del usuario que queremos actualizar. Devolveremos en un objeto JSON su id
app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    res.json(
        {
            id: id,
            info: "Esta es la respuesta del método PUT"
        });

});


// 5.Endpoint DELETE de un usuario. Devolverá un objeto JSON.

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const removedUser = users.splice(id, 1);

    res.status(200).json({removedUser});

});


/* 6.Endpoint POST para crear un usuario. Le pasaremos la información necesaria para crear un usuario. 
Si el campo nombre no está definido, devolveremos un código de error HTTP 400, donde indicaremos que el nombre es requerido. 
Devolveremos la información proporcionada en la petición POST en un objeto user. */

app.post("/users", (req, res) => {
    const body = req.body;

    if(body.name) {
        users.push(body)
        res.status(201).json({user: body});
    } else {
        res.status(400).json(
            {
                ok: false,
                message: "El campo nombre es requerido"
            }
        )
    }

});

app.listen(process.env.PORT);


/* Objeto de prueba para el Body de la petición en Thunder

{
  "name": "Luis",
  "id": 8,
  "email": "lindsay.ferguson@reqres.in",
  "first_name": "Lindsay",
  "last_name": "Ferguson",
  "avatar": "https://reqres.in/img/faces/8-image.jpg"
}

*/