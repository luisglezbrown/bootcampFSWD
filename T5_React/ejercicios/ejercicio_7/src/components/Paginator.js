import { useContext } from "react";
import { ResultsContext, PageContext, SetPageContext } from "./SearchResults";

import './style/Paginator.css';

export default function Paginator() {

    const searchResults = useContext(ResultsContext);
    const page = useContext(PageContext);
    const setPage = useContext(SetPageContext);


    return (
    <>
        {searchResults.total_pages > 1 &&
            <nav className='paginatorContainer'>
                <p  onClick={() => setPage(page-1)} 
                    className={`paginatorBtn ${searchResults?.page <= 1 && 'hidden'}`}>
                        Anterior
                </p> 
                <span className='paginatorText'>{`página ${page} de ${searchResults?.total_pages}`}</span>
                <p  onClick={() => setPage(page+1)} 
                    className={`paginatorBtn ${searchResults?.page >= searchResults?.total_pages && 'hidden'}`}>
                        Siguiente
                </p>
            </nav>
        }
    </>)
}
