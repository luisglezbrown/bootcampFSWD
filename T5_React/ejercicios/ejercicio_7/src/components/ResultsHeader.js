import './style/ResultsHeader.css'
import { useParams } from "react-router";
import { useContext } from "react";
import { ResultsContext } from "./SearchResults";


export default function ResultsHeader() {
    const { query } = useParams();
    const search = useContext(ResultsContext)

    return (
        <div className='resultsContainer'>
            <h1 className='mainHeader'>Wooooooooooooooooow! 📽️ {search.total_results} películas con '{query}':</h1>
        </div>
    )
}
