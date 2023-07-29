import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

import { Tooltip } from '@mantine/core';
import WorldMap from './countries.json';

interface RowData {
    country: string;
    alpha2: string;
    alpha3: string;
    ecologicalFootprint?: number;
    freedomInTheWorldScore?: number;
    sanctionsUN?: string;
    sanctionsEU?: string;
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
            fill: "#C7D2C7",
            transition: "all 250ms",
            stroke: "#000000",
            strokeWidth: 0.25
        },
        hover: {
            fill: '#DDE4DD',
            transition: "all 250ms",
            stroke: "#000000",
            strokeWidth: 0.25
        }
      };

      const geographyStyleEligible = {
        default: {
            fill: "#3C9892",
            transition: "all 250ms",
            stroke: "#000000",
            strokeWidth: 0.25
        },
        hover: {
            fill: '#50B9B2',
            transition: "all 250ms",
            stroke: "#000000",
            strokeWidth: 0.25
        }
      };

      const geographyStyleIneligible = {
        default: {
            fill: "#B2572A",
            transition: "all 250ms",
            stroke: "#000000",
            strokeWidth: 0.25
        },
        hover: {
            fill: '#D06B39',
            transition: "all 250ms",
            stroke: "#000000",
            strokeWidth: 0.25
        }
      };

      const geographyStyleInsufficientEligible = {
        default: {
            fill: "url(#insufficientYes)",
            transition: "all 250ms",
            stroke: "#000000",
            strokeWidth: 0.25
        },
        hover: {
            fill: 'url(#insufficientYesHover)',
            transition: "all 250ms",
            stroke: "#000000",
            strokeWidth: 0.25
        }
      };

      const geographyStyleInsufficientIneligible = {
        default: {
            fill: "url(#insufficientNo)",
            transition: "all 250ms",
            stroke: "#000000",
            strokeWidth: 0.25
        },
        hover: {
            fill: 'url(#insufficientNoHover)',
            transition: "all 250ms",
            stroke: "#000000",
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
                    <line x1="0" y1="0" x2="0" y2="2" stroke="#3C9892" stroke-width="2" />
                    <line x1="2" y1="0" x2="2" y2="2" stroke="#C7D2C7" stroke-width="2" />
                </pattern>

                <pattern id="insufficientNo" width="2" height="2" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse" fill="#adb5bd">
                    <line x1="0" y1="0" x2="0" y2="2" stroke="#B2572A" stroke-width="2" />
                    <line x1="2" y1="0" x2="2" y2="2" stroke="#C7D2C7" stroke-width="2" />
                </pattern>

                <pattern id="insufficientYesHover" width="2" height="2" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse" fill="#adb5bd">
                    <line x1="0" y1="0" x2="0" y2="2" stroke="#50B9B2" stroke-width="2" />
                    <line x1="2" y1="0" x2="2" y2="2" stroke="#DDE4DD" stroke-width="2" />
                </pattern>

                <pattern id="insufficientNoHover" width="2" height="2" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse" fill="#adb5bd">
                    <line x1="0" y1="0" x2="0" y2="2" stroke="#D06B39" stroke-width="2" />
                    <line x1="2" y1="0" x2="2" y2="2" stroke="#DDE4DD" stroke-width="2" />
                </pattern>

                <ZoomableGroup
                    center={[0,-317]}
                    zoom={0.7}
                    minZoom={0.6}
                    maxZoom={10}
                >
                <Tooltip.Floating label={tooltipContent} color="#000000">
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