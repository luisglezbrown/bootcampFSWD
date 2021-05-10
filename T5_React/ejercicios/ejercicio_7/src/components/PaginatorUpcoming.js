import './style/Paginator.css';

export default function PaginatorUpcoming({upcomingFilmsList, page, setPage}) {
    
    const pagesArray = [];
    for (let index = 1; index <= upcomingFilmsList.total_pages; index++) {
        pagesArray.push(index);        
    }
    
    return (
        <nav className='paginatorContainer'>
            <p  onClick={() => setPage(page-1)}
                className={`paginatorBtn ${upcomingFilmsList.page <= 1 && 'hidden'}`}>
                    Anterior
            </p>

            {pagesArray.map((currentPage) =>(
                <p key={currentPage} href
                onClick={() => setPage(currentPage)}
                className={`pageLink ${currentPage === page && 'active'}`}>
                    {currentPage}</p>
            ))}       

            <p  onClick={() => setPage(page+1)}
                className={`paginatorBtn ${upcomingFilmsList.page >= upcomingFilmsList.total_pages && 'hidden'}`}>
                    Siguiente
            </p>
        </nav>
    )
}
