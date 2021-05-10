import { useState, useEffect, createContext } from 'react';
import { useParams } from 'react-router';
import { SEARCH_URL } from '../Settings';
import NoResults from './NoResults';
import OkResults from './OkResults';

export const ResultsContext = createContext();
export const PageContext = createContext();
export const SetPageContext = createContext();

export default function UpcomingFilms() {

    const [page, setPage] = useState(1);
    const { query } = useParams()

    const [searchResults, setSearchResults] = useState([])
    useEffect(() => {
      fetch(`${SEARCH_URL}${query}&page=${page}`)
      .then(response => response.json())
      .then(data => setSearchResults(data))
    }, [query, page])

    return (
    <>
        <ResultsContext.Provider value={ searchResults }>
        <PageContext.Provider value={ page }>
        <SetPageContext.Provider value={ setPage }>

            {searchResults.total_results  
            ?   <OkResults />
            :   <NoResults />
            }
        </SetPageContext.Provider>
        </PageContext.Provider>
        </ResultsContext.Provider>
    </>)
}