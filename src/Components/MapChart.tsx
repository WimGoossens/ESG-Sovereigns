import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

import { Tooltip } from '@mantine/core';
import WorldMap from './features.json';

interface RowData {
    country: string;
    alpha2: string;
    alpha3: string;
    ecologicalFootprint?: number;
    freedomInTheWorld?: number;
    countrySanction?: string;
    eligible?: string;
  }
  
interface TableSortProps {
    data: RowData[];
}

function MapChart({ data }: TableSortProps) {
    const geoUrl = WorldMap;
    
    const [tooltipContent, setTooltipContent] = useState("");

    const onMouseLeave = () => {
        setTooltipContent("");
    };

    const geographyStyleInsufficientData = {
        default: {
            fill: "#adb5bd",
            transition: "all 250ms",
            stroke: "orange",
            strokeWidth: 0.25
        },
        hover: {
            fill: '#22b8cf',
            transition: "all 250ms",
            stroke: "orange",
            strokeWidth: 0.25
        }
      };

      const geographyStyleEligible = {
        default: {
            fill: "#94d82d",
            transition: "all 250ms",
            stroke: "orange",
            strokeWidth: 0.25
        },
        hover: {
            fill: '#22b8cf',
            transition: "all 250ms",
            stroke: "orange",
            strokeWidth: 0.25
        }
      };

      const geographyStyleIneligible = {
        default: {
            fill: "#ff6b6b",
            transition: "all 250ms",
            stroke: "orange",
            strokeWidth: 0.25
        },
        hover: {
            fill: '#22b8cf',
            transition: "all 250ms",
            stroke: "orange",
            strokeWidth: 0.25
        }
      };

      const geographyStyleInsufficientEligible = {
        default: {
            fill: "url(#insufficientYes)",
            transition: "all 250ms",
            stroke: "orange",
            strokeWidth: 0.25
        },
        hover: {
            fill: '#22b8cf',
            transition: "all 250ms",
            stroke: "orange",
            strokeWidth: 0.25
        }
      };

      const geographyStyleInsufficientIneligible = {
        default: {
            fill: "url(#insufficientNo)",
            transition: "all 250ms",
            stroke: "orange",
            strokeWidth: 0.25
        },
        hover: {
            fill: '#22b8cf',
            transition: "all 250ms",
            stroke: "orange",
            strokeWidth: 0.25
        }
    };
    
    const mapWidth = 800;
    const mapHeight = 450;

    function geographyStyler(eligibility: String) {
        switch(eligibility) {
            case "Yes":
                return geographyStyleEligible;
            case "Yes*":
                return geographyStyleInsufficientEligible;
            case "No":
                return geographyStyleIneligible;
            case "No*":
                return geographyStyleInsufficientIneligible;
            default:
                return geographyStyleInsufficientData;
        }
    };

    return (
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
                <pattern id="insufficientYes" width="2" height="2" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse" fill="#adb5bd">
                    <line x1="0" y1="0" x2="0" y2="2" stroke="#94d82d" stroke-width="2" />
                    <line x1="2" y1="0" x2="2" y2="2" stroke="#adb5bd" stroke-width="2" />
                </pattern>

                <pattern id="insufficientNo" width="2" height="2" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse" fill="#adb5bd">
                    <line x1="0" y1="0" x2="0" y2="2" stroke="#ff6b6b" stroke-width="2" />
                    <line x1="2" y1="0" x2="2" y2="2" stroke="#adb5bd" stroke-width="2" />
                </pattern>

                <ZoomableGroup
                    center={[0,-317]}
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
                                    style={geographyStyler(String(data.filter(data => data.alpha3 == geo.id).map((res) => res.eligible)))}
                                    
                                    
                                    // {(String(data.filter(data => data.alpha3 == geo.id).map((res) => res.eligible)) == 'Yes') ? geographyStyleEligible : 
                                    //    (((String(data.filter(data => data.alpha3 == geo.id).map((res) => res.eligible)) == 'Yes*') ? geographyStyleInsufficientEligible : 
                                    //     ((String(data.filter(data => data.alpha3 == geo.id).map((res) => res.eligible)) == 'No') ? geographyStyleIneligible : 
                                    //     ((String(data.filter(data => data.alpha3 == geo.id).map((res) => res.eligible)) == 'No') ? geographyStyleIneligible) : geographyStyleInsufficientData)
                                    // }
                                    onMouseEnter={() => {
                                        setTooltipContent(`${geo.properties.name} - ${(String(data.filter(data => data.alpha3 == geo.id).map((res) => res.eligible)))}`);
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
    );
};

export default MapChart;