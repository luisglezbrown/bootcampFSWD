import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import { overviewMaxCharacters, POSTER_BASE_URL, UPCOMING_URL } from '../Settings';

export default function UpcomingFilms() {

    const [upcomingFilmsList, setUpcomingFilmsList] = useState([])
    useEffect(() => {
      fetch(UPCOMING_URL)
      .then(response => response.json())
      .then(data => setUpcomingFilmsList(data.results))
    }, [])

    const history = useHistory();
    function handleClick(event) {
        history.push(`/film/${event.target.id}`);
    }

    return (
        <>
            <h1 className='mainHeader'>Próximos estrenos</h1>
            <div className='upcomingFilmsContainer'>

                {upcomingFilmsList.map(({poster_path, title, overview, release_date, id}) => {

                    const shortenOverview = `${overview.split('. ', 1).join(' ')} [...]`;

                    return   (
                    <div className="filmCard">
                        <img className='posterImg' src={`${POSTER_BASE_URL}${poster_path}`} alt={`Póster de ${title}`}/>
                        <h2 className="title">{title}</h2>
                        <p>Descripción: {overview.length > overviewMaxCharacters ? shortenOverview  : overview}</p>
                        <p>Fecha de estreno: {release_date}</p>
                        <button type="button" className="seeMoreButton" id={id} onClick={handleClick}>Ver más</button>
                        
                    </div>)
                })}            
            </div>
        </>    
    )
}
