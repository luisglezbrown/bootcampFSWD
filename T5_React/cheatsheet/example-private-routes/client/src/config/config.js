/**
 * Constantes globales que son susceptibles de cambiar
 * en el futuro y que queremos tener localizadas.
 */

const PORT = 4000;
const BASE_API_URL = `http://localhost:${PORT}/`;
const LOGIN_URL = BASE_API_URL + "login";
const SESSION_URL = BASE_API_URL + "session";
const PRIVATE_URL = BASE_API_URL + "private";
const ADMIN_URL = BASE_API_URL + "admin";

export {
    LOGIN_URL,
    SESSION_URL,
    PRIVATE_URL,
    ADMIN_URL
};