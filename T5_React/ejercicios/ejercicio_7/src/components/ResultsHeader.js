import './style/ResultsHeader.css'

export default function ResultsHeader({search, searchResults}) {
    return (
        <div className='resultsContainer'>
            <h1 className='mainHeader'>Wooooooooooooooooow! 📽️ {searchResults.total_results} películas con '{search}':</h1>
        </div>
    )
}
