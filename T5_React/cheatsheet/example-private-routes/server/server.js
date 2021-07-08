const express = require("express");
const app = express();

const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("./models/User");
const {verifyToken, verifyAdmin} = require("./middlewares/auth");

// Antes de los endpoints, usamos los middlewares necesarios
app.use(express.json());
app.use(cors());

/**
 * Por simplicidad se han puesto las rutas aquí, lo recomendable es
 * siempre tenerlas ordenadas en la carpeta Routes
 */

app.post("/users", (req, res) => {
    /**
     * Endpoint para crear nuevos usuarios, necesario 
     * en este ejemplo para probar la API completa.
     */
    const body = req.body;
  
    const user = new User({
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
      role: body.role,
    });
  
    user.save((err, userDB) => {
      if (err) {
        res.status(400).json({
          ok: false,
          err,
        });
      } else {
        res.json({
          ok: true,
          user: userDB,
        });
      }
    });
  });

app.post("/login", (req, res) => {
    /**
     * Endpoint para iniciar sesión con email y contraseña
     * Se comprueban errores de servidor, si el email existe
     * y si la contraseña es correcta. Si todo va bien, se le devuelve
     * un token JWT y la información del usuario.
     */
    const body = req.body;

    User.findOne({email: body.email}, (error, userDB) => {
        if(error) {
            res.status(500).json({ok: false, error});
        
        } else if(!userDB) {
            res.status(400).json({
                ok: false,
                error: {message: "Email not found"}
            });
        } else if(!bcrypt.compareSync(body.password, userDB.password)) {
            res.status(400).json({
                ok: false,
                error: {message: "Invalid password"}
            });
        } else {
            const token = jwt.sign(
                {user: userDB}, // payload
                "SECRET KEY", // Clave privada y secreta
                {expiresIn: 60 * 30}
            );

            res.status(200).json({ok: true, token, user: userDB});
        }
    })
});

app.get("/session", verifyToken, (req, res) => {
    /**
     * Ruta protegida con verifyToken, si el token no es válido, no llega a ejecutar
     * esta función. Si es válido y tras comprobar que el usuario sigue existiendo,
     * le devuelve un token y los datos renovados.
     * 
     * Este endpoint es necesario si se quiere persistir la sesión aunque el 
     * usuario cierre el navegador y además se quiere hacer de forma segura.
     */
     let token = req.get("authorization");
     token = token && token.split(" ")[1];
     const user = jwt.decode(token)?.user; // obtiene el payload con la información del usuario

    // El resto de comprobaciones es similar que en el login por credenciales
    User.findOne({email: user.email}, (error, userDB) => {
        if(error) {
            res.status(500).json({ok: false, error});
        
        } else if(!userDB) {
            res.status(400).json({
                ok: false,
                error: {message: "Email not found"}
            });
        } else {
            const token = jwt.sign(
                {user: userDB}, // payload
                "SECRET KEY",
                {expiresIn: 60 * 30}
            );

            res.status(200).json({ok: true, token, user: userDB});
        }
    })
});

app.get("/private", verifyToken, (req, res) => {
    /**
     * Ruta protegida con verifyToken, si el token es válido, 
     * devuelve directamente el mensaje protegido pero podríamos hacer
     * consultas a BBDD.
     */
     res.status(200).json({ok: true, message: "CodeSpace Academy"});
});

app.get("/admin", verifyToken, verifyAdmin, (req, res) => {
    /**
     * Ruta protegida con verifyToken y por verifyAdmin, si el token
     * es válido y además el rol del usuario es ADMIN, devuelve
     * directamente el mensaje protegido pero podríamos hacer
     * consultas a BBDD.
     */
     res.status(200).json({ok: true, message: "CodeSpace Academy ONLY FOR ADMINS"});
});

// Conectamos a la BBDD "codespace" de MongoDB y guardamos la conexión en una constante
mongoose.connect("mongodb://localhost:27017/codespace", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

// Configuramos logs para cuando se produzca un error y para cuando se abra
db.on("error", err => console.log("Connection to DB failed: ", err));
db.once("open", () => console.log("Connected to DB successfuly"));

// Quedamos de forma indefinida a la escucha en el puerto 4000
app.listen(4000, () => console.log("Listening on port ", 4000));