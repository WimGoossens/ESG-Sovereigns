import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

import { Container, Tooltip } from '@mantine/core';

const MapChart = () => {
    const geoUrl = "/features.json";
    
    const [tooltipContent, setTooltipContent] = useState("");

    const onMouseLeave = () => {
        setTooltipContent("");
    };

    const geographyStyle = {
        default: {
            fill: "#adb5bd",
            transition: "all 500ms",
            outline: "none",
            stroke: "5c5f66",
            strokeWidth: 0.2
        },
        hover: {
            fill: '#f08c00',
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
            // <div>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 155,
                    rotate: [-11, 0, 0],
                    center: [0, 0],
                  }}
                width={mapWidth}
                height={mapHeight}
            >
                <ZoomableGroup
                    center={[0,-317]}
                    // translateExtent={[
                    //     [-500, -250],
                    //     [900, mapHeight]
                    // ]}
                    // translateExtent={[
                    //     [-100, -0],
                    //     [0, 0]
                    // ]}
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
            // </div>
    );
};

export default MapChart;