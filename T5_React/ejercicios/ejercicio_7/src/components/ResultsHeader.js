import './style/ResultsHeader.css'

export default function ResultsHeader({query, searchResults}) {
    return (
        <div className='resultsContainer'>
            <h1 className='mainHeader'>Wooooooooooooooooow! 📽️ {searchResults.total_results} películas con '{query}':</h1>
        </div>
    )
}
