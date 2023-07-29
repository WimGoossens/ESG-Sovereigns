import { withEmotionCache } from '@emotion/react';
import { Image, Container, Text, Button, Group, rem, Grid, Space } from '@mantine/core';
import { Link } from "react-router-dom";

export function AboutPerson() {

  return (
      <Container size={700}>
        <Grid grow align="center">
            <Grid.Col span={2}>
                <Image
                    src={require('../Images/wim.jpg')}
                    alt="Wim Goossens"
                    radius="xl"
                    withPlaceholder/>
            </Grid.Col>
            <Grid.Col span={7}>
              <Text>
                My name is Wim Goossens and I am passionate about sustainability and ESG investing in particular. 
                I have a background in Econometrics and Operations Research and graduated from the University of Groningen. 
                During my studies, I came in contact with the field of ESG investing, as I wrote my master's thesis about benchmarks for equity investments that incorporated ESG exclusions.
              </Text>
              <Space h="md"/>
              <Text>
                Currently, I work as a supervisor specialist at the Dutch Central Bank (<Text span fs="italic">De Nederlandsche Bank</Text>), focusing on the financial risks of pension funds and insurance companies.
                One of my main subjects is ESG risk management, where I specialize in the quantitative side of things.
              </Text>
              <Space h="md"/>
              <Text fs="italic">
                Disclaimer: any views expressed on this website are mine and not necessarily the same as those of the De Nederlandsche Bank.
              </Text>
              <Text c="govvies.0">0aaaaaaaaaaaaaaaaaaaaa</Text>
              <Text c="govvies.1">1aaaaaaaaaaaaaaaaaaaaa</Text>
              <Text c="govvies.2">2aaaaaaaaaaaaaaaaaaaaa</Text>
              <Text c="govvies.3">3aaaaaaaaaaaaaaaaaaaaa</Text>
              <Text c="govvies.4">4aaaaaaaaaaaaaaaaaaaaa</Text>
              <Text c="govvies.5">5aaaaaaaaaaaaaaaaaaaaa</Text>
              <Text c="govvies.6">6aaaaaaaaaaaaaaaaaaaaa</Text>
              <Text c="govvies.7">7aaaaaaaaaaaaaaaaaaaaa</Text>
              <Text c="govvies.8">8aaaaaaaaaaaaaaaaaaaaa</Text>
              <Text c="govvies.9">9aaaaaaaaaaaaaaaaaaaaa</Text>
            </Grid.Col>
        </Grid>

      </Container>
  );
}

export default AboutPerson;