import { HeroText } from "../Components/HeroTitle";
import FrequentlyAskedQuestions from '../Components/FrequentlyAskedQuestions';

import FeaturesTitle from "../Components/FeaturesData";
import ContactForm from "../Components/ContactForm";

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

            <ContactForm/>

            {/* <SectionTwo />

            <SectionThree />

            <SectionFour /> */}

            <FrequentlyAskedQuestions />

        </>
    )
};

export default HomePage;