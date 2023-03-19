// @ts-ignore
import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

// import { Tooltip } from 'react-tooltip'

import { useMantineTheme, Container, Tooltip } from '@mantine/core';

const MapChart = () => {
    const theme = useMantineTheme();

    const geoUrl = "/features.json";
    
    const [tooltipContent, setTooltipContent] = useState("");

    const onMouseLeave = () => {
        setTooltipContent("");
    };

    const geographyStyle = {
        default: {
            fill: "#a9a9a9",
            transition: "all 500ms",
            outline: "none",
            stroke: "grey",
            strokeWidth: 0.2
        },
        hover: {
            fill: "#eecb7a",
            transition: "all 250ms",
            outline: "none",
            stroke: "grey",
            strokeWidth: 0.2
        },
        pressed: {
            outline: "none"
        }
      };
    
      const mapWidth = 800;
      const mapHeight = 450;

    return (
        <Container>
            <div>
            <ComposableMap
                projection="geoMercator"
                // data-tip=""
                width={mapWidth}
                height={mapHeight}
            >
                <ZoomableGroup
                    center={[0,-317]}
                    translateExtent={[
                        [-100, -250],
                        [900, mapHeight]
                    ]}
                    zoom={0.7}
                    minZoom={0.6}
                    maxZoom={10}
                >
                <Tooltip.Floating label={tooltipContent} color="dark">
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={geographyStyle}
                                    onMouseEnter={() => {
                                        setTooltipContent(`${geo.properties.name}`);
                                    }}
                                    onMouseLeave={onMouseLeave}
                                />
                                )
                            )
                        }
                    </Geographies>
                    </Tooltip.Floating>
                </ZoomableGroup>
            </ComposableMap>
            </div>
        </Container>
    );
};

export default MapChart;