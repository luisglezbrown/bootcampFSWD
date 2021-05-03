import { useState, useEffect } from 'react';
import { UPCOMING_URL } from '../Settings';
import FilmCard from './FilmCard';

export default function UpcomingFilms() {

    const [upcomingFilmsList, setUpcomingFilmsList] = useState([])
    useEffect(() => {
      fetch(`${UPCOMING_URL}&page=`)
      .then(response => response.json())
      .then(data => setUpcomingFilmsList(data))
    }, [])

    return (
        <>
            <h1 className='mainHeader'>⇓ Próximos estrenos ⇓</h1>
            <div className='upcomingFilmsContainer'>              
                {upcomingFilmsList.results?.map((film) =>(
                    <FilmCard film={film} key={film.id}/>
                ))}
            </div>
        </>    
    )
}
