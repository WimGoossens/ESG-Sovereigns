// @ts-ignore
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";



import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Badge, Button, Group } from '@mantine/core';

const MapChart = () => {
    const theme = useMantineTheme();
    const geoUrl =
        "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/africa.json";

    return (
        <Container>
            <div>
                <ComposableMap projection="geoMercator">
                    <ZoomableGroup center={[0, 0]} zoom={9}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                        }
                    </Geographies>
                    <Marker coordinates={[0, 0]}>
                        <circle r={3} fill="#FF5533" />
                    </Marker>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        </Container>
    );
};

export default MapChart;