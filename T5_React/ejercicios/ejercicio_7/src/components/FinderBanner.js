import { useState } from "react";
import { useHistory} from "react-router-dom";

import './style/FinderBanner.css';

export default function FinderBanner() {

    const [searchInput, setSearchInput] = useState('');

    const history = useHistory();
    function handleSubmit(event) {
        event.preventDefault();
        history.push(`/results/${searchInput}`);
    }

    return (
        <form className='FinderBannerContainer' onSubmit={handleSubmit}>
            <h2>Bienvenido, ¿buscando inspiración?</h2>
            <input  type='text' 
                    placeholder="🎬 🍿 Busca una peli, la manta corre de tu parte... 😉" 
                    onChange={(event) => setSearchInput(event.target.value)} 
                    value={searchInput}
            />
        </form>
    )
}
