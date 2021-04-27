import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Records(props) {

    const [userData, setUserData] = useState({});

    /* const user = props.match.params.user */
    const { user } = useParams(); // Devuelve un objeto con los parametros recibido por URL
            // ^ Viene de "router, del path para Records :user"
    const USERS_URL = 'https://reqres.in/api/users/';

    useEffect(() => {
        fetch(`${USERS_URL}${user}`)
        .then(response => response.json())
        .then(data => setUserData(data))
    }, [user]); //Ponemos user ahi para que cada vez que cambie user se haga el fetch
        // ^ Lista de dependencia: Si este estado cambia, se ejecuta useEffect de nuevo 

    return (
        <div>
            {/* Record of {props.match.params.user} */}
            <h2>Record of {user}</h2>
            <ul>
                <li>{userData.data?.email}</li>
                <li>{userData.data?.first_name}</li>
                <li>{userData.data?.last_name}</li>
                <img src={userData.data?.avatar} alt='profile'/>
            </ul>
            {/* los interrogantes evitan que lance error el fetch cuando
            se carga la página y los datos aún no llegaron, en su lugar te lanza
            un undefined */}
        </div>
    )
}
