import UpcomingFilms from "../components/UpcomingFilms";
import FilmFinder from "../components/FilmFinder";
import Footer from "../components/Footer";

export default function index() {
    return (
        <>
            <FilmFinder />
            <UpcomingFilms /> 
            <Footer />
        </>
    )
}
