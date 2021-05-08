import FilmCard from './FilmCard';
import { useContext } from "react";
import { ResultsContext } from "./SearchResults";


export default function FilmsContainer() {

    const searchResults = useContext(ResultsContext);

    return (
        <div className='FilmsContainer'>              
            {searchResults.results?.map(
                (film) =>
                (<FilmCard film={film} key={film.id}/>))
            }
        </div>
    )
}
