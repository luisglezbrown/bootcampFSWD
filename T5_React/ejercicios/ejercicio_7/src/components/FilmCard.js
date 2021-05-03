import './style/FilmCard.css'

import { useHistory } from "react-router-dom";
import { overviewMaxCharacters, posterPlaceholder,  POSTER_BASE_URL } from "../Settings";

export default function FilmCard({ film }) {

    const history = useHistory();
    function handleClick(event) {
        history.push(`/film/${event.target.id}`);
    }

    const shortenOverview = `${film.overview.split('. ', 1).join(' ')} [...]`;

    return   (
    <div className="filmCard">
        {film.poster_path 
            ? <img src={`${POSTER_BASE_URL}${film.poster_path}`} alt={`Póster de ${film.title}`} className='posterImg'/>
            : posterPlaceholder
        }
        <h2 className="title">{film.title}</h2>
        <p><span className='infoTag'>estreno: </span> {film.release_date}</p>
        <p><span className='infoTag'>Descripción: </span> {film.overview.length > overviewMaxCharacters ? shortenOverview  : film.overview}</p>
        <button type="button" className="seeMoreButton" id={film.id} onClick={handleClick}>🔎</button>                        
    </div>
    )
}
