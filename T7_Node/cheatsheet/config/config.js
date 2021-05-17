// Configuramos la variable de entorno "PORT" para que
// coja una ya existente o le asigne o la 3001 si no existe

process.env.PORT = process.env.PORT || 3001;

// Podemos generar una semilla bastante segura con este código de Node:
// require("crypto").randomBytes(64).toString("hex");
process.env.SEED = process.env.SEED || "SECRET KEY";