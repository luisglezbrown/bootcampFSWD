import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { POSTER_BASE_URL, FILM_DETAIL_URL, FILM_DETAIL_URL_SUFFIX, TMDB_URL, LOGO_TMBD_BOTON_URL } from '../Settings';

export default function FilmDetails() {

    const [filmData, setFilmData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`${FILM_DETAIL_URL}${id}${FILM_DETAIL_URL_SUFFIX}`)
        .then(response => response.json())
        .then(data => setFilmData(data))
    }, [id]);

    return (
        <>
            
            <div className='filmDetailContainer'>
                <img src={`${POSTER_BASE_URL}${filmData?.poster_path}`} alt={`Póster de ${filmData?.title}`}/>
                <div className='filmDetailCard'>
                    <h1 className='mainHeader'>{filmData?.title}</h1>
                    <p className='tagline'>{filmData?.tagline}</p>
                    <p><span className='infoTag'> estreno: </span>{filmData?.release_date}</p>
                    {/* <p><span className='infoTag'> género: </span>{filmData.genres}</p> */}
                    <p><span className='infoTag'> resumen: </span>{filmData?.overview}</p>
                    <p className='average'>{filmData?.vote_average} / 10</p>
                    <a className='toTMDb' href={`${TMDB_URL}${id}`} target='_blank' rel='noreferrer'>
                        ver en <img className='buttonToTMDb' src={LOGO_TMBD_BOTON_URL} alt='logo TMDb'/>
                    </a>
                </div>
            </div>
        </>
    )
}
