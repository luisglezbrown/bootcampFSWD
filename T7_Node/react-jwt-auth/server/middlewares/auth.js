const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token = req.get("authorization");
    token = token && token.split(" ")[1];

    jwt.verify(
        token,// El primer argumento es el propio token.
        process.env.SEED, //La semilla
        (error, payload) => {
            if (error) {
                res.status(401).json({
                    ok: false,
                    error
                })
            } else {
                next();
            }
        }
    );
};

module.exports = verifyToken;