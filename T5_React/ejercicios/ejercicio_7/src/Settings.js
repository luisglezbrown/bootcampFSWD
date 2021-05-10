const UPCOMING_URL ='https://api.themoviedb.org/3/movie/upcoming?api_key=425ecbdbe0eebe8e205eb7f6d8511b92&language=es';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=425ecbdbe0eebe8e205eb7f6d8511b92&language=es&query=';
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const POSTER_PLACEHOLDER_URL = 'https://yify-torrent.net/img/default_thumbnail.svg';
const FILM_DETAIL_URL = 'https://api.themoviedb.org/3/movie/';
const FILM_DETAIL_URL_SUFFIX = '?api_key=425ecbdbe0eebe8e205eb7f6d8511b92&language=es';
const TMDB_URL = 'https://www.themoviedb.org/movie/';
const LOGO_TMBD_BOTON_URL = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg';

const overviewMaxCharacters = 200;
const posterPlaceholder = (<img src={`${POSTER_PLACEHOLDER_URL}`} alt='' className='posterPlaceHolder'/>)

export {   UPCOMING_URL, 
        SEARCH_URL,
        POSTER_BASE_URL, 
        POSTER_PLACEHOLDER_URL,
        overviewMaxCharacters, 
        FILM_DETAIL_URL, 
        FILM_DETAIL_URL_SUFFIX, 
        TMDB_URL, 
        LOGO_TMBD_BOTON_URL,
        posterPlaceholder
    };