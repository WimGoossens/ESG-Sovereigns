import { HeroText } from "../Components/HeroTitle";
import FeaturesImages from '../Components/Features';
import FrequentlyAskedQuestions from '../Components/FrequentlyAskedQuestions';

import featuresJSON from '../Components/features.json';
import FeaturesTitle from "../Components/FeaturesData";

const HomePage = () => {
    return (
        <>
            {/* <HeroTitle /> */}

            <HeroText />

            {/* <FeaturesImages
                supTitle={featuresJSON.props.supTitle}
                description={featuresJSON.props.description}
                data={featuresJSON.props.data}
            /> */}

            <FeaturesTitle/>

            {/* <SectionTwo />

            <SectionThree />

            <SectionFour /> */}

            <FrequentlyAskedQuestions />

        </>
    )
};

export default HomePage;