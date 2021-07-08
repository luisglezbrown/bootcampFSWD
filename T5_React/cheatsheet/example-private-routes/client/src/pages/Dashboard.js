import { useEffect, useState } from "react"
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { PRIVATE_URL } from "../config/config";
import { useAuthContext } from "../context/AuthContext";

export default function Dashboard() {
    const {signOut, getAuthHeaders, loginUser, isAdmin} = useAuthContext();
    const [privateMessage, setPrivateMessage] = useState("");

    useEffect(() => {
        const options = {headers: getAuthHeaders()};
        
        fetch(PRIVATE_URL, options)
        .then(response => {
            /**
             * Si hay algun error (no autorizado, token inválido...) lanzamos un error
             * para que no se procesen los datos y caiga en el catch. Si va
             * todo bien, procesamos los datos como siempre.
             */
            if(!response.ok) throw new Error(response.statusText)
            return response.json();
        })
        .then(data => setPrivateMessage(data.message))
        .catch(error => {
            /**
             * Si ha habido problemas con el acceso a los datos privados, cerramos la sesión 
             * y redirigimos el usuario al login.
             */
            console.error(error); // Los console.log están prohibidos en producción!
            signOut();
            return <Redirect to="/login" />;
        });

        // El siguiente comentario (eslint...) es para deshabilitar el warning de "missing dependencies"
        // ya que no necesitamos incluir las dependencias que nos pide en este caso.

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className="container text-center pt-5">
            <h1>This is a private Dashboard. Welcome {loginUser?.email}</h1>
            <p>Message from a protected API: {privateMessage}</p>
            {isAdmin() && <NavLink to="/admin">Go to Admin Page (This is only visible if you are admin)</NavLink>}
        </div>
    )
}
