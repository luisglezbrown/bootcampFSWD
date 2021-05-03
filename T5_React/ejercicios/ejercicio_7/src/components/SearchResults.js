import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { SEARCH_URL } from '../Settings';
import FilmCard from './FilmCard';
import Paginator from './Paginator';
import ResultsHeader from './ResultsHeader';

export default function UpcomingFilms() {

    const [page, setPage] = useState(1);
    const { search } = useParams()

    const [searchResults, setSearchResults] = useState([])
    useEffect(() => {
      fetch(`${SEARCH_URL}${search}&page=${page}`)
      .then(response => response.json())
      .then(data => setSearchResults(data))
    }, [search, page])

    return (
        <>
            <ResultsHeader search={search} searchResults={searchResults}/>
            <Paginator searchResults={searchResults} setPage={setPage} page={page} />
            <div className='upcomingFilmsContainer'>              
                {searchResults.results?.map((film) =>(
                    <FilmCard film={film} key={film.id}/>
                ))}
            </div>
            <Paginator searchResults={searchResults} setPage={setPage} page={page} />
        </>    
    )
}