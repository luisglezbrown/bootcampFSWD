import './style/Paginator.css';

export default function Paginator({searchResults, setPage, page}) {
    return (
    <>
        {searchResults.total_pages > 1 &&
            <nav className='paginatorContainer'>
                <a  href onClick={() => setPage(page-1)} 
                    className={`paginatorBtn ${searchResults.page <= 1 && 'hidden'}`}>
                        Anterior
                </a> 
                <span className='paginatorText'>{`página ${page} de ${searchResults.total_pages}`}</span>
                <a  href onClick={() => setPage(page+1)} 
                    className={`paginatorBtn ${searchResults.page >= searchResults.total_pages && 'hidden'}`}>
                        Siguiente
                </a>
            </nav>
        }
    </>)
}
