const express = require("express");

// 1.Usaremos la librería de express()
const app = express();

// 2.Nuestro server escuchará en el puerto 3000.
const port = 3000;

app.use(express.json());

// 3.Endpoint GET de un usuario. Devolverá un objeto JSON
app.get("/user", (req, res) => {
    res.json(
        {
            id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg",
            info: "Esta es la respuesta del método GET"
        });
});


// 4.Endpoint PUT de un usuario al que le pasaremos la ID del usuario que queremos actualizar. Devolveremos en un objeto JSON su id
app.put("/user/:id", (req, res) => {
    let body = req.body;
    res.json(
        {
            id: body.id,
            info: "Esta es la respuesta del método PUT"
        });

});


// 5.Endpoint DELETE de un usuario. Devolverá un objeto JSON.

app.delete("/user/:id", (req, res) => {
    let body = req.body;
    res.json(
        {
            body,
            info: "El usuario anterior ha sido eliminado con el método DELETE"
        });

});


/* 6.Endpoint POST para crear un usuario. Le pasaremos la información necesaria para crear un usuario. 
Si el campo nombre no está definido, devolveremos un código de error HTTP 400, donde indicaremos que el nombre es requerido. 
Devolveremos la información proporcionada en la petición POST en un objeto user. */

app.post("/user", (req, res) => {
    let body = req.body;

    if(body.name) {
        res.json(
            body
        )
    } else {
        res.status(400).json(
            {
                ok: false,
                message: "El campo nombre es requerido"
            }
        )
    }

});

app.listen(port);


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