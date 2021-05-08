import './style/Paginator.css';

export default function PaginatorUpcoming({upcomingFilmsList, page, setPage}) {
    
    const pagesArray = [];
    for (let index = 1; index <= upcomingFilmsList.total_pages; index++) {
        pagesArray.push(index);        
    }
    
    return (
        <nav className='paginatorContainer'>
            <a  onClick={() => setPage(page-1)} href
                className={`paginatorBtn ${upcomingFilmsList.page <= 1 && 'hidden'}`}>
                    Anterior
            </a>

            {pagesArray.map((currentPage) =>(
                <a key={currentPage} href
                onClick={() => setPage(currentPage)}
                className={`pageLink ${currentPage === page && 'active'}`}>
                    {currentPage}</a>
            ))}       

            <a  onClick={() => setPage(page+1)} href
                className={`paginatorBtn ${upcomingFilmsList.page >= upcomingFilmsList.total_pages && 'hidden'}`}>
                    Siguiente
            </a>
        </nav>
    )
}
