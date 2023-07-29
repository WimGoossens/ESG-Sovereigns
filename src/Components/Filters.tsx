import { Accordion, Title } from '@mantine/core';
import IndicatorRangeSlider from './Indicators/IndicatorRangeSlider';
import IndicatorSwitch from './Indicators/IndicatorSwitch';

interface FilterStatus {
    checkedUNSanctions: boolean;
    setCheckedUNSanctions: (newType: boolean) => void;
    checkedEUSanctions: boolean;
    setCheckedEUSanctions: (newType: boolean) => void;
    rangeValueEcologicalFootprint: [number, number];
    setRangeValueEcologicalFootprint: (newType: [number, number]) => void;
    rangeValueGlobalPeaceIndex: [number, number];
    setRangeValueGlobalPeaceIndex: (newType: [number, number]) => void;
    rangeValueCorruptionPerceptionIndex: [number, number];
    setRangeValueCorruptionPerceptionIndex: (newType: [number, number]) => void;
    rangeValueFreedomInTheWorldScore: [number, number];
    setRangeValueFreedomInTheWorldScore: (newType: [number, number]) => void;
    rangeValueNDGAIN: [number, number];
    setRangeValueNDGAIN: (newType: [number, number]) => void;
    rangeValueHumanDevelopmentIndex: [number, number];
    setRangeValueHumanDevelopmentIndex: (newType: [number, number]) => void;
    rangeValueWomenBusinessAndTheLaw: [number, number];
    setRangeValueWomenBusinessAndTheLaw: (newType: [number, number]) => void;
    rangeValueHumanCapitalIndex: [number, number];
    setRangeValueHumanCapitalIndex: (newType: [number, number]) => void;
    rangeValueFragileStatesIndex: [number, number];
    setRangeValueFragileStatesIndex: (newType: [number, number]) => void;
    rangeValueWorldRiskIndex: [number, number];
    setRangeValueWorldRiskIndex: (newType: [number, number]) => void;
    rangeValueEnvironmentalPerformanceIndex: [number, number];
    setRangeValueEnvironmentalPerformanceIndex: (newType: [number, number]) => void;
    rangeValueAqueduct3: [number, number];
    setRangeValueAqueduct3: (newType: [number, number]) => void;
    rangeValuePressFreedomIndex: [number, number];
    setRangeValuePressFreedomIndex: (newType: [number, number]) => void;
}



function Filters( status : FilterStatus ) {
    return (
        <Accordion variant="contained" multiple={true} defaultValue={['sanctions']}>
        <>
            <Title order={1} m="md">Criteria</Title>
        </>
        <Accordion.Item value="environmental">
            <Accordion.Control>
                <Title order={3}>Environmental</Title>
            </Accordion.Control>
            <Accordion.Panel>
            <IndicatorRangeSlider
                    title={"Aqueduct 3.0"}
                    min={0}
                    max={7}
                    step={0.1}
                    rangeValue={status.rangeValueAqueduct3}
                    setRangeValue={status.setRangeValueAqueduct3}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 2.5, label: '2.5' },
                        // { value: 5, label: '5' },
                        // { value: 7.5, label: '7.5' },
                        { value: 7, label: '7' },
                      ]}
                    description={
                        "The Aqueduct™ water risk framework combines 13 water risk indicators—including quantity, quality, and reputational risks—into a composite overall water risk score."
                    }
                    source={"WRI Aqueduct, accessed on 21 May 2023"}
                    sourceLink={"https://www.wri.org/aqueduct"}
                />
                <IndicatorRangeSlider
                    title={"Ecological Footprint"}
                    min={0}
                    max={10}
                    step={0.1}
                    rangeValue={status.rangeValueEcologicalFootprint}
                    setRangeValue={status.setRangeValueEcologicalFootprint}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 2.5, label: '2.5' },
                        // { value: 5, label: '5' },
                        // { value: 7.5, label: '7.5' },
                        { value: 10, label: '10' },
                      ]}
                    description={
                        "The Ecological Footprint measures how much area of biologically productive land and water an individual, population or activity requires to produce all the resources it consumes and to absorb the waste it generates, using prevailing technology and resource management practices. The Ecological Footprint is usually measured in global hectares. Because trade is global, an individual or country’s Footprint includes land or sea from all over the world."
                    }
                    source={"Global Footprint Network, 2018"}
                    sourceLink={"https://www.footprintnetwork.org/"}
                />
                <IndicatorRangeSlider
                    title={"Environmental Performance Index"}
                    min={0}
                    max={100}
                    step={1}
                    rangeValue={status.rangeValueEnvironmentalPerformanceIndex}
                    setRangeValue={status.setRangeValueEnvironmentalPerformanceIndex}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 2.5, label: '2.5' },
                        // { value: 5, label: '5' },
                        // { value: 7.5, label: '7.5' },
                        { value: 100, label: '100' },
                      ]}
                    description={
                        "The Environmental Performance Index (EPI) provides a data-driven summary of the state of sustainability around the world. Using 40 outcome-oriented indicators across 11 issue categories, the EPI ranks 180 countries on climate change performance, environmental health, and ecosystem vitality. These indicators provide a gauge at a national scale of how close countries are to established environmental policy targets."
                    }
                    source={"Wolf, M. J., Emerson, J. W., Esty, D. C., de Sherbinin, A., Wendling, Z. A., et al. (2022). 2022 Environmental Performance Index. New Haven, CT: Yale Center for Environmental Law & Policy."}
                    sourceLink={"https://epi.yale.edu/"}
                />
                <IndicatorRangeSlider
                    title={"ND-GAIN"}
                    min={0}
                    max={100}
                    step={0.1}
                    rangeValue={status.rangeValueNDGAIN}
                    setRangeValue={status.setRangeValueNDGAIN}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 2.5, label: '2.5' },
                        // { value: 5, label: '5' },
                        // { value: 7.5, label: '7.5' },
                        { value: 100, label: '100' },
                      ]}
                    description={
                        "The ND-GAIN Country Index summarizes a country's vulnerability to climate change and other global challenges in combination with its readiness to improve resilience. It aims to help governments, businesses and communities better prioritize investments for a more efficient response to the immediate global challenges ahead."
                    }
                    source={"Notre Dame Global Adaptation Initiative, 2020"}
                    sourceLink={"https://gain.nd.edu/"}
                />
                <IndicatorRangeSlider
                    title={"World Risk Indicators"}
                    min={0}
                    max={50}
                    step={0.1}
                    rangeValue={status.rangeValueWorldRiskIndex}
                    setRangeValue={status.setRangeValueWorldRiskIndex}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 2.5, label: '2.5' },
                        // { value: 5, label: '5' },
                        // { value: 7.5, label: '7.5' },
                        { value: 50, label: '50' },
                      ]}
                    description={
                        "The WorldRiskIndex indicates the disaster risk from extreme natural events and negative climate change impacts for 193 countries in the world. It is calculated per country as the geometric mean of exposure and vulnerability."
                    }
                    source={"Bündnis Entwicklung Hilft, 2022"}
                    sourceLink={"https://weltrisikobericht.de/weltrisikobericht-2022-e/"}
                />
            </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="social">
            <Accordion.Control>
                <Title order={3}>Social</Title>
            </Accordion.Control>
            <Accordion.Panel>
                <IndicatorRangeSlider 
                    title={"Global Peace Index"}
                    min={1}
                    max={5}
                    step={0.1}
                    rangeValue={status.rangeValueGlobalPeaceIndex}
                    setRangeValue={status.setRangeValueGlobalPeaceIndex}
                    marks={[
                        { value: 1, label: '1' },
                        // { value: 2, label: '2' },
                        // { value: 3, label: '3' },
                        // { value: 4, label: '4' },
                        { value: 5, label: '5' },
                    ]}
                    description={
                        "A composite index measuring the peacefulness of countries made up of 23 quantitative and qualitative indicators each weighted on a scale of 1-5. The lower the score the more peaceful the country."
                    }
                    source={"Institute for Economics and Peace, 2022"}
                    sourceLink={"https://www.visionofhumanity.org/"}
                />
                <IndicatorRangeSlider 
                    title={"Human Capital Index"}
                    min={0}
                    max={1}
                    step={0.1}
                    rangeValue={status.rangeValueHumanCapitalIndex}
                    setRangeValue={status.setRangeValueHumanCapitalIndex}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 2, label: '2' },
                        // { value: 3, label: '3' },
                        // { value: 4, label: '4' },
                        { value: 1, label: '1' },
                    ]}
                    description={
                        "The Human Capital Index (HCI) measures the amount of human capital that a child born today can expect to attain by age 18, given the risks of poor health and poor education that prevail in the country of residence."
                    }
                    source={"The World Bank, 2020"}
                    sourceLink={"https://www.worldbank.org/en/publication/human-capital"}
                />
                <IndicatorRangeSlider 
                    title={"Human Development Index"}
                    min={0}
                    max={1}
                    step={0.1}
                    rangeValue={status.rangeValueHumanDevelopmentIndex}
                    setRangeValue={status.setRangeValueHumanDevelopmentIndex}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 2, label: '2' },
                        // { value: 3, label: '3' },
                        // { value: 4, label: '4' },
                        { value: 1, label: '1' },
                    ]}
                    description={
                        "The Human Development Index (HDI) is a summary measure of average achievement in key dimensions of human development: a long and healthy life, being knowledgeable and having a decent standard of living. The HDI is the geometric mean of normalized indices for each of the three dimensions."
                    }
                    source={"United Nations, 2021"}
                    sourceLink={"https://hdr.undp.org/data-center/human-development-index#/indicies/HDI"}
                />
            </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="governance">
            <Accordion.Control>
                <Title order={3}>Governance</Title>
            </Accordion.Control>
            <Accordion.Panel>
                <IndicatorRangeSlider 
                    title={"Corruption Perception Index"}
                    min={0}
                    max={100}
                    rangeValue={status.rangeValueCorruptionPerceptionIndex}
                    setRangeValue={status.setRangeValueCorruptionPerceptionIndex}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 25, label: '25%' },
                        // { value: 50, label: '50%' },
                        // { value: 75, label: '75%' },
                        { value: 100, label: '100' },
                    ]}
                    description={
                        "Provides perceptions by businesspeople and country experts of levels of corruption in the public sector."
                    }
                    source={"Transparency International, 2022"}
                    sourceLink={"https://www.transparency.org/"}
                />
                <IndicatorRangeSlider 
                    title={"Fragile States Index"}
                    min={0}
                    max={120}
                    rangeValue={status.rangeValueFragileStatesIndex}
                    setRangeValue={status.setRangeValueFragileStatesIndex}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 50, label: '50' },
                        { value: 120, label: '120' },
                    ]}
                    description={
                        "Measures pressures that push states towards failure, supporting political risk assessment and early warning of conflict."
                    }
                    source={"The Fund for Peace, 2022"}
                    sourceLink={"https://fragilestatesindex.org/"}
                />
                <IndicatorRangeSlider 
                    title={"Freedom in the World score"}
                    min={0}
                    max={100}
                    rangeValue={status.rangeValueFreedomInTheWorldScore}
                    setRangeValue={status.setRangeValueFreedomInTheWorldScore}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 25, label: '25' },
                        // { value: 50, label: '50' },
                        // { value: 75, label: '75' },
                        { value: 100, label: '100' },
                    ]}
                    description={
                        "Freedom in the World is an annual global report on political rights and civil liberties, composed of numerical ratings and descriptive texts for each country and a select group of territories."
                    }
                    source={"Freedom in the World, 2023"}
                    sourceLink={"https://freedomhouse.org/"}
                />
                <IndicatorRangeSlider 
                    title={"Press Freedom Index"}
                    min={0}
                    max={100}
                    rangeValue={status.rangeValuePressFreedomIndex}
                    setRangeValue={status.setRangeValuePressFreedomIndex}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 50, label: '50' },
                        { value: 100, label: '100' },
                    ]}
                    description={
                        "he  purpose of the World Press Freedom Index is to compare the level of freedom enjoyed by journalists and media in 180 countries and territories."
                    }
                    source={"Reporters Without Borders, 2023"}
                    sourceLink={"https://rsf.org/"}
                />
                <IndicatorRangeSlider 
                    title={"Women, Business and the Law"}
                    min={0}
                    max={100}
                    rangeValue={status.rangeValueWomenBusinessAndTheLaw}
                    setRangeValue={status.setRangeValueWomenBusinessAndTheLaw}
                    marks={[
                        { value: 0, label: '0' },
                        // { value: 50, label: '50' },
                        { value: 100, label: '100' },
                    ]}
                    description={
                        "Women, Business and the Law offers objective and measurable benchmarks for global progress toward gender equality."
                    }
                    source={"The World Bank, 2023"}
                    sourceLink={"https://wbl.worldbank.org/en/wbl"}
                />
            </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="sanctions">
            <Accordion.Control>
                <Title order={3}>Sanctions</Title>
            </Accordion.Control>
            <Accordion.Panel>
                <IndicatorSwitch
                    title={"UN Sanctions List"}
                    description={
                        "The EU Sanctions Map provides information on restrictive measures (sanctions) adopted by the European Union – either to transpose measures imposed by the United Nations Security Council or autonomously. The EU Sanctions Map does not provide information on national sanctions of the EU Member States or any other sanctions imposed by third states."
                    }
                    source={"EU Sanctions Map"}
                    sourceLink={"https://sanctionsmap.eu/#/main"}
                    checked={status.checkedUNSanctions}
                    setChecked={status.setCheckedUNSanctions}
                />
                <IndicatorSwitch
                    title={"EU Sanctions List"}
                    description={
                        "The EU Sanctions Map provides information on restrictive measures (sanctions) adopted by the European Union – either to transpose measures imposed by the United Nations Security Council or autonomously. The EU Sanctions Map does not provide information on national sanctions of the EU Member States or any other sanctions imposed by third states."
                    }
                    source={"EU Sanctions Map"}
                    sourceLink={"https://sanctionsmap.eu/#/main"}
                    checked={status.checkedEUSanctions}
                    setChecked={status.setCheckedEUSanctions}
                />
            </Accordion.Panel>
        </Accordion.Item>

        </Accordion>
    );
}

export default Filters;