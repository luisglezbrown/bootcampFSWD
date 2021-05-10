import { useState, useEffect } from 'react';
import { UPCOMING_URL } from '../Settings';
import FilmCard from './FilmCard';
import PaginatorUpcoming from './PaginatorUpcoming'

export default function UpcomingFilms() {

    const [page, setPage] = useState(1);
    const [upcomingFilmsList, setUpcomingFilmsList] = useState([]);

    useEffect(() => {
      fetch(`${UPCOMING_URL}&page=${page}`)
      .then(response => response.json())
      .then(data => setUpcomingFilmsList(data))
    }, [page])

    return (
        <>
            <h1 className='mainHeader'>⇓ Próximos estrenos ⇓</h1>
            <div className='FilmsContainer'>              
                {upcomingFilmsList.results?.map((film) =>(
                    <FilmCard film={film} key={film.id}/>
                ))}
            </div>
            <PaginatorUpcoming upcomingFilmsList={upcomingFilmsList} page={page} setPage={setPage}/>
        </>    
    )
}
