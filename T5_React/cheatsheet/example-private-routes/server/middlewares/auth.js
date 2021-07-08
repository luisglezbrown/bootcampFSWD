const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  /**
   * Middleware que obtiene el token de la petición y comprueba su validez,
   * en caso de que no haya problema, sigue adelante con el código del endpoint
   * correspondiente. En caso de que haya algún problema, se devuelve un error 401.
   */
    let token = req.get("authorization");
    token = token && token.split(" ")[1];
    
    jwt.verify(token, "SECRET KEY", (error, payload) => {
        if (error) {
            console.log("Invalid token, forced to signout!");
            res.status(401).json({
                ok: false,
                error: {message: "Invalid token"}
            })
        } else {
            console.log(payload.user.email, "has logged in!");
            next();
        }
    });
};

const verifyAdmin = (req, res, next) => {
  /**
   * Middleware que comprueba si el usuario es admin. Este middleware NO comprueba
   * si el token es válido, es decir, que el payload no haya sido modificado, por
   * lo que tendrá que ser usado tras "verifyToken", en caso de que no haya problema,
   * sigue adelante con el código del endpoint correspondiente. En caso de que
   * haya algún problema, se devuelve un error 403.
   * 
   * Se podría mejorar comprobando en la base de datos que el usuario sigue siendo admin, 
   * pero para simplificar, podemos no cubrirlo y poner un tiempo de expiración
   * menor en el token.
   */
  let token = req.get("authorization");
  token = token && token.split(" ")[1];
  const decoded = jwt.decode(token); // obtiene el payload con la información del usuario
  
  if(decoded.user?.role !== "ADMIN") {
    return res.status(403).json({
      ok: false,
      err: {message: "Forbidden"},
    });
  } else {
    next();
  }
  
};

module.exports = {verifyToken, verifyAdmin};