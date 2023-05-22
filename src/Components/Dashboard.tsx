import { Grid, Skeleton, Container, Box, Paper, LoadingOverlay } from '@mantine/core';
import MapChart from '../Components/MapChart';
import Filters from './Filters';
import { useState } from 'react';
import CountryTable from './CountryTable';

import CountryData from './Dataset.json';

function Dashboard() {
  const [checkedUNSanctions, setCheckedUNSanctions] = useState(true);
  const [checkedEUSanctions, setCheckedEUSanctions] = useState(false);

  const [rangeValueEcoFP, setRangeValueEcoFP] = useState<[number, number]>([0, 10]);
  const [rangeValueGPI, setRangeValueGPI] = useState<[number, number]>([0, 100]);
  const [rangeValueCPI, setRangeValueCPI] = useState<[number, number]>([0, 100]);
  const [rangeValueGFP, setRangeValueGFP] = useState<[number, number]>([0, 100]);

  for (var i = 0; i < CountryData.length; i++) {
    CountryData[i] = Object.assign(CountryData[i], {
        eligible: ((checkedUNSanctions && typeof CountryData[i].countrySanction === 'string') ? "No" : 
          ((typeof CountryData[i].ecologicalFootprint === 'number') && 
          (typeof CountryData[i].freedomInTheWorld === 'number') ?
            (((Number(CountryData[i].ecologicalFootprint) < rangeValueEcoFP[0]) || (Number(CountryData[i].ecologicalFootprint) > rangeValueEcoFP[1])) || 
            ((Number(CountryData[i].freedomInTheWorld) < rangeValueGFP[0]) || (Number(CountryData[i].freedomInTheWorld) > rangeValueGFP[1])) ? "No" : "Yes") : "Insufficient Data")
        )
    });
  }

  function checkEligibility(country: Object) {
    if(checkedUNSanctions && typeof CountryData[i].countrySanction === 'string'){
      return "No";
    } else if (true){
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
              rangeValueCPI={rangeValueCPI}
              setRangeValueCPI={setRangeValueCPI}
              rangeValueEcoFP={rangeValueEcoFP}
              setRangeValueEcoFP={setRangeValueEcoFP}
              rangeValueGFP={rangeValueGFP}
              setRangeValueGFP={setRangeValueGFP}
              rangeValueGPI={rangeValueGPI}
              setRangeValueGPI={setRangeValueGPI}
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