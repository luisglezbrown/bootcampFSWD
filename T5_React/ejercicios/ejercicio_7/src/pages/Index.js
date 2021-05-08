import UpcomingFilms from "../components/UpcomingFilms";
import FinderBanner from "../components/FinderBanner";
import Footer from "../components/Footer";

export default function index() {
    return (
        <>
            <FinderBanner />
            <UpcomingFilms /> 
            <Footer />
        </>
    )
}
