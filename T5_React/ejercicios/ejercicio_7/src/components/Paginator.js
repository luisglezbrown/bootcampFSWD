import './style/Paginator.css';

export default function Paginator({searchResults, setPage, page}) {
    return (
        <nav className='paginatorContainer'>
            <button onClick={() => setPage(page-1)} className={`paginatorBtn ${searchResults.page <= 1 && 'hidden'}`}>Anterior</button> 
            <span className='paginatorText'>{searchResults.total_pages > 1 && `página ${page} de ${searchResults.total_pages}`}</span>
            <button onClick={() => setPage(page+1)} className={`paginatorBtn ${searchResults.page >= searchResults.total_pages && 'hidden'}`}>Siguiente</button>
        </nav>
    )
}
