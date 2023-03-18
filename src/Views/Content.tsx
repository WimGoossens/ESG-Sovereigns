import About from "../Components/About";
import SectionOne from '../Components/SectionOne';
import SectionTwo from '../Components/SectionTwo';
import SectionThree from '../Components/SectionThree';
import SectionFour from '../Components/SectionFour';
import SectionFive from '../Components/SectionFive';
import MapChart from '../Components/MapChart';

const Content = () => {
    return (
        <>
            <About />

            <SectionOne />

            <SectionTwo />

            <SectionThree />

            <SectionFour />

            <SectionFive />

            <MapChart />
            { /* Other sections .. */ }
        </>
    )
};

export default Content;