import { useParams } from "react-router";
import './style/NoResults.css'

export default function NoResults() {

    const { query } = useParams()

    return (
        <>
            <div className='noResults'>
                <h1>Oooops! No hay resultados para '{query}'</h1>
                <a href='http://localhost:3000'>¡Buscaré otra película! 🎬</a>
            </div>               
        </>
    )
}
