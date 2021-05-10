import ResultsHeader from './ResultsHeader';
import Paginator from './Paginator';
import FilmsContainer from "./FilmsContainer";


export default function OkResults() {
    return (
    <>
        <ResultsHeader />
        <Paginator />
        <FilmsContainer />
        <Paginator />
    </>
    )
}
