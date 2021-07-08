# Ejemplo full stack de un login seguro con React y NodeJS

Para ver este documento con formato markdown, puedes descargar una extensión en vscode o bien utilizar el shorcut ctrl+shift+v. Ambas partes del ejemplo están documentadas pero este readme explicará la estructura general. La lectura de este archivo es prácticamente obligatoria.

## Instalación

> `cd client`

> `npm install`

> `npm start`

En otro terminal:
> `cd server`

> `npm install`

> `npm start`

## Dependencias y configuración

Necesita mongoDB instalado y un usuario creado a través de la API.

El cliente se levantará en el puerto 3000 por defecto y el servidor en el 4000.

## Páginas del cliente

El cliente consta de 4 páginas:

- Página publica: cualquiera puede verla aunque no tenga la sesión iniciada.

- Página de login: cualquiera puede verla. Aunque si estás logueado, te redirige al dashboard directamente.

- Página de dashboard: sólo pueden acceder los que tengan sesión iniciada, si se intenta acceder sin sesión, con un token expirado o si se recarga la página y el usuario ha sido eliminado, expulsa al login.

- Página de admin: sólo se puede acceder si tienes la sesión iniciada y además tienes el rol ADMIN. Si algo no se cumple, te redirige al dashboard común.

Hay algunos elementos que se ocultan dependiendo de si tienes la sesión iniciada o si eres admin. Como el botón de login y un enlace a la parte de administración que está presente en el dashboard.

=========================================

Recuerda: toda la "protección" desde el lado del cliente es por pura UX, la seguridad real en cuanto a la información debe residir en la API (servidor).

## Endpoints del servidor

El servidor consta de 5 endpoints:

- `/users` [POST]: Necesario para poder crear el primer usuario. Sólo necesita email y contraseña.

- `/login` [POST]: Encargado de procesar el proceso de login, comprobación de credenciales y generación del token JWT.

- `/session` [GET]: Encargado de renovar la sesión, útil si queremos que persista cuando el usuario cierre el navegador. Recibe el token, lo valida con el middleware, y devuelve un token renovado y la información del usuario actualizada.

- `/private` [GET]: Protegida por token, devuelve un mensaje privado.

- `/admin` [GET]: Protegida por token y por rol, devuelve un mensaje privado solo para admins. Para probar esta funcionalidad, puedes cambiar el rol del usuario de USER a ADMIN directamente desde la shell de mongo o desde MongoDB Compass.
