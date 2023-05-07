import { Accordion, Title } from '@mantine/core';
import IndicatorRangeSlider from './Indicators/IndicatorRangeSlider';
import IndicatorSwitch from './Indicators/IndicatorSwitch';

interface FilterStatus {
    checkedUNSanctions: boolean;
    setCheckedUNSanctions?: (newType: boolean) => void;
    checkedEUSanctions: boolean;
    setCheckedEUSanctions?: (newType: boolean) => void;
    rangeValueEcoFP: [number, number];
    setRangeValueEcoFP: (newType: [number, number]) => void;
    rangeValueGPI: [number, number];
    setRangeValueGPI: (newType: [number, number]) => void;
    rangeValueCPI: [number, number];
    setRangeValueCPI: (newType: [number, number]) => void;
    rangeValueGFP: [number, number];
    setRangeValueGFP: (newType: [number, number]) => void;
}

function Filters( status : FilterStatus ) {
    return (
        <Accordion variant="contained" multiple={true} defaultValue={['environmental']}>
        <>
            <Title order={1} m="md">Criteria</Title>
        </>
        <Accordion.Item value="environmental">
            <Accordion.Control>
                <Title order={3}>Environmental</Title>
            </Accordion.Control>
            <Accordion.Panel>
                <IndicatorRangeSlider
                    title={"Ecological Footprint"}
                    min={0}
                    max={10}
                    step={0.1}
                    rangeValue={status.rangeValueEcoFP}
                    setRangeValue={status.setRangeValueEcoFP}
                    marks={[
                        { value: 2.5, label: '2.5' },
                        { value: 5, label: '5' },
                        { value: 7.5, label: '7.5' },
                      ]}
                    description={"The Ecological Footprint equals the number of planets required if the whole world population lived like the countries population."}
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
                    min={0}
                    max={100}
                    rangeValue={status.rangeValueGPI}
                    setRangeValue={status.setRangeValueGPI}
                    marks={[
                        { value: 25, label: '25%' },
                        { value: 50, label: '50%' },
                        { value: 75, label: '75%' },
                    ]}
                    description={"The Ecological Footprint equals the number of planets required if the whole world population lived like the countries population."}

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
                    rangeValue={status.rangeValueCPI}
                    setRangeValue={status.setRangeValueCPI}
                    marks={[
                        { value: 25, label: '25%' },
                        { value: 50, label: '50%' },
                        { value: 75, label: '75%' },
                    ]}
                    description={"The Ecological Footprint equals the number of planets required if the whole world population lived like the countries population."}
                />
                <IndicatorRangeSlider 
                    title={"Global Freedom Score"}
                    min={0}
                    max={100}
                    rangeValue={status.rangeValueGFP}
                    setRangeValue={status.setRangeValueGFP}
                    marks={[
                        { value: 25, label: '25%' },
                        { value: 50, label: '50%' },
                        { value: 75, label: '75%' },
                    ]}
                    description={"The Ecological Footprint equals the number of planets required if the whole world population lived like the countries population."}
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
                    description={"UN Sanctions"}
                    checked={status.checkedUNSanctions}
                    setChecked={status.setCheckedUNSanctions}
                />
                <IndicatorSwitch
                    title={"EU Sanctions List"}
                    description={"EU Sanctions"}
                    checked={status.checkedEUSanctions}
                    setChecked={status.setCheckedEUSanctions}
                />
            </Accordion.Panel>
        </Accordion.Item>

        </Accordion>
    );
}

export default Filters;