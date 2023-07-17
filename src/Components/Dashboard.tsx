import { Grid, Skeleton, Container, Box, Paper, LoadingOverlay } from '@mantine/core';
import MapChart from '../Components/MapChart';
import Filters from './Filters';
import { useState } from 'react';
import CountryTable from './CountryTable';

import CountryData from './Dataset3.json';

interface RowData {
  country: string;
  alpha2: string;
  alpha3: string;
  sanctionsUN?: string;
  sanctionsEU?: string;
  eligible?: string;
  ecologicalFootprint?: number;
  freedomInTheWorldScore?: number;
  humanDevelopmentIndex?: number;
  womenBusinessAndTheLaw?: number;
  humanCapitalIndex?: number;
  globalPeaceIndex?: number;
  fragileStatesIndex?: number;
  corruptionPerceptionIndex?: number;
  worldRiskIndex?: number;
  environmentalPerformanceIndex?: number;
  aqueduct3?: number;
  nDGAIN?: number;
  pressFreedomIndex?: number;
}

function Dashboard() {
  const [checkedUNSanctions, setCheckedUNSanctions] = useState(true);
  const [checkedEUSanctions, setCheckedEUSanctions] = useState(false);

  const [ecologicalFootprintRangeValue, setEcologicalFootprintRangeValue] = useState<[number, number]>([0, 10]);
  const [globalPeaceIndexRangeValue, setGlobalPeaceIndexRangeValue] = useState<[number, number]>([1, 5]);
  const [corruptionPerceptionIndexRangeValue, setCorruptionPerceptionIndexRangeValue] = useState<[number, number]>([0, 100]);
  const [humanDevelopmentIndexRangeValue, setHumanDevelopmentIndexRangeValue] = useState<[number, number]>([0, 1]);
  const [womenBusinessAndTheLawRangeValue, setWomenBusinessAndTheLawRangeValue] = useState<[number, number]>([0, 100]);
  const [humanCapitalIndexRangeValue, setHumanCapitalIndexRangeValue] = useState<[number, number]>([0, 1]);
  const [fragileStatesIndexRangeValue, setFragileStatesIndexRangeValue] = useState<[number, number]>([0, 120]);
  const [worldRiskIndexRangeValue, setWorldRiskIndexRangeValue] = useState<[number, number]>([0, 100]);
  const [environmentalPerformanceIndexRangeValue, setEnvironmentalPerformanceIndexRangeValue] = useState<[number, number]>([0, 100]);
  const [aqueduct3RangeValue, setAqueduct3RangeValue] = useState<[number, number]>([0, 7]);
  const [nDGAINRangeValue, setNDGAINRangeValue] = useState<[number, number]>([0, 100]);
  const [freedomInTheWorldScoreRangeValue, setFreedomInTheWorldScoreRangeValue] = useState<[number, number]>([0, 100]);
  const [pressFreedomIndexRangeValue, setPressFreedomIndexRangeValue] = useState<[number, number]>([0, 100]);




  function checkEligibility(country: Object) {
    if((checkedUNSanctions && typeof CountryData[i].sanctionsUN === 'string') ||
    (checkedEUSanctions && typeof CountryData[i].sanctionsEU === 'string')){
      return "No";
    } else if (
      (typeof CountryData[i].ecologicalFootprint != 'number') &&
      (typeof CountryData[i].freedomInTheWorldScore != 'number') &&
      (typeof CountryData[i].humanDevelopmentIndex != 'number') &&
      (typeof CountryData[i].womenBusinessAndTheLaw != 'number') &&
      (typeof CountryData[i].humanCapitalIndex != 'number') &&
      (typeof CountryData[i].globalPeaceIndex != 'number') &&
      (typeof CountryData[i].fragileStatesIndex != 'number') &&
      (typeof CountryData[i].corruptionPerceptionIndex != 'number') &&
      (typeof CountryData[i].worldRiskIndex != 'number') &&
      (typeof CountryData[i].environmentalPerformanceIndex != 'number') &&
      (typeof CountryData[i].aqueduct3 != 'number') &&
      (typeof CountryData[i].nDGAIN != 'number') &&
      (typeof CountryData[i].pressFreedomIndex != 'number')
    ){
      return "No Data";
    } else if (
      (typeof CountryData[i].ecologicalFootprint === 'number') &&
      (typeof CountryData[i].freedomInTheWorldScore === 'number') &&
      (typeof CountryData[i].humanDevelopmentIndex === 'number') &&
      (typeof CountryData[i].womenBusinessAndTheLaw === 'number') &&
      (typeof CountryData[i].humanCapitalIndex === 'number') &&
      (typeof CountryData[i].globalPeaceIndex === 'number') &&
      (typeof CountryData[i].fragileStatesIndex === 'number') &&
      (typeof CountryData[i].corruptionPerceptionIndex === 'number') &&
      (typeof CountryData[i].worldRiskIndex === 'number') &&
      (typeof CountryData[i].environmentalPerformanceIndex === 'number') &&
      (typeof CountryData[i].aqueduct3 === 'number') &&
      (typeof CountryData[i].nDGAIN === 'number') &&
      (typeof CountryData[i].pressFreedomIndex === 'number')
    ){
      if (
        (Number(CountryData[i].ecologicalFootprint) < ecologicalFootprintRangeValue[0]) ||
        (Number(CountryData[i].ecologicalFootprint) > ecologicalFootprintRangeValue[1]) ||
        (Number(CountryData[i].freedomInTheWorldScore) < freedomInTheWorldScoreRangeValue[0]) ||
        (Number(CountryData[i].freedomInTheWorldScore) > freedomInTheWorldScoreRangeValue[1]) ||
        (Number(CountryData[i].globalPeaceIndex) < globalPeaceIndexRangeValue[0]) ||
        (Number(CountryData[i].globalPeaceIndex) > globalPeaceIndexRangeValue[1]) ||
        (Number(CountryData[i].humanDevelopmentIndex) < humanDevelopmentIndexRangeValue[0]) ||
        (Number(CountryData[i].humanDevelopmentIndex) > humanDevelopmentIndexRangeValue[1]) ||
        (Number(CountryData[i].womenBusinessAndTheLaw) < womenBusinessAndTheLawRangeValue[0]) ||
        (Number(CountryData[i].womenBusinessAndTheLaw) > womenBusinessAndTheLawRangeValue[1]) ||
        (Number(CountryData[i].humanCapitalIndex) < humanCapitalIndexRangeValue[0]) ||
        (Number(CountryData[i].humanCapitalIndex) > humanCapitalIndexRangeValue[1]) ||
        (Number(CountryData[i].fragileStatesIndex) < fragileStatesIndexRangeValue[0]) ||
        (Number(CountryData[i].fragileStatesIndex) > fragileStatesIndexRangeValue[1]) ||
        (Number(CountryData[i].worldRiskIndex) < worldRiskIndexRangeValue[0]) ||
        (Number(CountryData[i].worldRiskIndex) > worldRiskIndexRangeValue[1]) ||
        (Number(CountryData[i].environmentalPerformanceIndex) < environmentalPerformanceIndexRangeValue[0]) ||
        (Number(CountryData[i].environmentalPerformanceIndex) > environmentalPerformanceIndexRangeValue[1]) ||
        (Number(CountryData[i].corruptionPerceptionIndex) < corruptionPerceptionIndexRangeValue[0]) ||
        (Number(CountryData[i].corruptionPerceptionIndex) > corruptionPerceptionIndexRangeValue[1]) ||
        (Number(CountryData[i].aqueduct3) < aqueduct3RangeValue[0]) ||
        (Number(CountryData[i].aqueduct3) > aqueduct3RangeValue[1]) ||
        (Number(CountryData[i].nDGAIN) < nDGAINRangeValue[0]) ||
        (Number(CountryData[i].nDGAIN) > nDGAINRangeValue[1]) ||
        (Number(CountryData[i].pressFreedomIndex) < pressFreedomIndexRangeValue[0]) ||
        (Number(CountryData[i].pressFreedomIndex) > pressFreedomIndexRangeValue[1])
      ){
        return "No";
      } else {
        return "Yes";
      }
    } else if (
      (Number(CountryData[i].ecologicalFootprint) < ecologicalFootprintRangeValue[0]) ||
      (Number(CountryData[i].ecologicalFootprint) > ecologicalFootprintRangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].freedomInTheWorldScore) < freedomInTheWorldScoreRangeValue[0]) ||
      (Number(CountryData[i].freedomInTheWorldScore) > freedomInTheWorldScoreRangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].globalPeaceIndex) < globalPeaceIndexRangeValue[0]) ||
      (Number(CountryData[i].globalPeaceIndex) > globalPeaceIndexRangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].humanDevelopmentIndex) < humanDevelopmentIndexRangeValue[0]) ||
      (Number(CountryData[i].humanDevelopmentIndex) > humanDevelopmentIndexRangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].womenBusinessAndTheLaw) < womenBusinessAndTheLawRangeValue[0]) ||
      (Number(CountryData[i].womenBusinessAndTheLaw) > womenBusinessAndTheLawRangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].humanCapitalIndex) < humanCapitalIndexRangeValue[0]) ||
      (Number(CountryData[i].humanCapitalIndex) > humanCapitalIndexRangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].fragileStatesIndex) < fragileStatesIndexRangeValue[0]) ||
      (Number(CountryData[i].fragileStatesIndex) > fragileStatesIndexRangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].worldRiskIndex) < worldRiskIndexRangeValue[0]) ||
      (Number(CountryData[i].worldRiskIndex) > worldRiskIndexRangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].environmentalPerformanceIndex) < environmentalPerformanceIndexRangeValue[0]) ||
      (Number(CountryData[i].environmentalPerformanceIndex) > environmentalPerformanceIndexRangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].aqueduct3) < aqueduct3RangeValue[0]) ||
      (Number(CountryData[i].aqueduct3) > aqueduct3RangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].nDGAIN) < nDGAINRangeValue[0]) ||
       (Number(CountryData[i].nDGAIN) > nDGAINRangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].corruptionPerceptionIndex) < corruptionPerceptionIndexRangeValue[0]) ||
      (Number(CountryData[i].corruptionPerceptionIndex) > corruptionPerceptionIndexRangeValue[1])
    ) {
      return "No*";
    } else if (
      (Number(CountryData[i].pressFreedomIndex) < pressFreedomIndexRangeValue[0]) ||
      (Number(CountryData[i].pressFreedomIndex) > pressFreedomIndexRangeValue[1])
    ) {
      return "No*";
    } 
    
    
    else {
      return "Yes*";
    }
  }

  for (var i = 0; i < CountryData.length; i++) {
    CountryData[i] = Object.assign(CountryData[i], {
        eligible: checkEligibility(CountryData[i])});
  }
  
  return (
    <Container fluid={true}>
      <Grid gutter="sm" justify="center">
        <Grid.Col xs={3}>
            <Filters
              checkedUNSanctions={checkedUNSanctions}
              setCheckedUNSanctions={setCheckedUNSanctions}
              checkedEUSanctions={checkedEUSanctions}
              setCheckedEUSanctions={setCheckedEUSanctions}
              rangeValueCorruptionPerceptionIndex={corruptionPerceptionIndexRangeValue}
              setRangeValueCorruptionPerceptionIndex={setCorruptionPerceptionIndexRangeValue}
              rangeValueEcologicalFootprint={ecologicalFootprintRangeValue}
              setRangeValueEcologicalFootprint={setEcologicalFootprintRangeValue}
              rangeValueFreedomInTheWorldScore={freedomInTheWorldScoreRangeValue}
              setRangeValueFreedomInTheWorldScore={setFreedomInTheWorldScoreRangeValue}
              rangeValueGlobalPeaceIndex={globalPeaceIndexRangeValue}
              setRangeValueGlobalPeaceIndex={setGlobalPeaceIndexRangeValue}
              rangeValueAqueduct3={aqueduct3RangeValue}
              setRangeValueAqueduct3={setAqueduct3RangeValue}
              rangeValueEnvironmentalPerformanceIndex={environmentalPerformanceIndexRangeValue}
              setRangeValueEnvironmentalPerformanceIndex={setEnvironmentalPerformanceIndexRangeValue}
              rangeValueFragileStatesIndex={fragileStatesIndexRangeValue}
              setRangeValueFragileStatesIndex={setFragileStatesIndexRangeValue}
              rangeValueHumanCapitalIndex={humanCapitalIndexRangeValue}
              setRangeValueHumanCapitalIndex={setHumanCapitalIndexRangeValue}
              rangeValueHumanDevelopmentIndex={humanDevelopmentIndexRangeValue}
              setRangeValueHumanDevelopmentIndex={setHumanDevelopmentIndexRangeValue}
              rangeValueNDGAIN={nDGAINRangeValue}
              setRangeValueNDGAIN={setNDGAINRangeValue}
              rangeValueWomenBusinessAndTheLaw={womenBusinessAndTheLawRangeValue}
              setRangeValueWomenBusinessAndTheLaw={setWomenBusinessAndTheLawRangeValue}
              rangeValueWorldRiskIndex={worldRiskIndexRangeValue}
              setRangeValueWorldRiskIndex={setWorldRiskIndexRangeValue}
              rangeValuePressFreedomIndex={pressFreedomIndexRangeValue}
              setRangeValuePressFreedomIndex={setPressFreedomIndexRangeValue}
            />
        </Grid.Col>
        <Grid.Col xs={7}>
          <Paper withBorder>
            <MapChart 
              data={CountryData}
            />
          </Paper>
        </Grid.Col>
        <Grid.Col xs={10}>
            <CountryTable
              data={CountryData}
            />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Dashboard;