import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { POSTER_BASE_URL, FILM_DETAIL_URL, FILM_DETAIL_URL_SUFFIX, TMDB_URL } from '../Settings';

export default function FilmDetails() {

    const [filmData, setFilmData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`${FILM_DETAIL_URL}${id}${FILM_DETAIL_URL_SUFFIX}`)
        .then(response => response.json())
        .then(data => setFilmData(data))
    }, [id]);

    return (
        <div>
            <img src={`${POSTER_BASE_URL}${filmData?.poster_path}`} alt={`Póster de ${filmData?.title}`}/>
            <h1>{filmData?.title}</h1>
            <p>{filmData?.tagline}</p>
            <p>{filmData?.release_date}</p>
            <p>{/* {filmData?.genres} */}</p>
            <p>{filmData?.overview}</p>
            <p>{filmData?.vote_average} / 10</p>
            <p><a href={`${TMDB_URL}${id}`}>Ver en TMDB</a></p>

        </div>
    )
}
