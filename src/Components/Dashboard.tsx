import { Grid, Skeleton, Container, Box } from '@mantine/core';
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

  console.log(CountryData);

  for (var i = 0; i < CountryData.length; i++) {
    CountryData[i] = Object.assign(CountryData[i], {
        eligible: (((checkedUNSanctions && typeof CountryData[i].countrySanction === 'string') || 
        ((typeof CountryData[i].ecologicalFootprint === 'number') &&
          (Number(CountryData[i].ecologicalFootprint) < rangeValueEcoFP[0]) || (Number(CountryData[i].ecologicalFootprint) > rangeValueEcoFP[1])))
          ? "No" : "Yes"), 
    });
  }

  console.log(CountryData);
  
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
          <Box sx={(theme) => ({
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]})}>
            <MapChart 
              data={CountryData}
            />
          </Box>
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