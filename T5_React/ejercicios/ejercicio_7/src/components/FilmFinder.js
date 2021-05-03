import { useState } from "react";
import { useHistory} from "react-router-dom";

import './style/FilmFinder.css';

export default function FilmFinder() {

    const [searchInput, setSearchInput] = useState('');

    const history = useHistory();
    function handleSubmit(event) {
        event.preventDefault();
        history.push(`/results/${searchInput}`);
    }

    return (
        <form className='filmFinderContainer' onSubmit={handleSubmit}>
            <h2>Bienvenido, ¿buscando inspiración?</h2>
            <input type='text' placeholder="🍿 Busca una peli" onChange={(event) => setSearchInput(event.target.value)} value={searchInput}/>
        </form>
    )
}
