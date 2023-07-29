import { Badge, Space, Group, Text, Popover, Anchor, Title, Container, Code } from '@mantine/core';

interface IndicatorProps {
    name: string;
    description: string;
    type: string;
    source?: string;
    sourceLink?: string;
    license?: string;
    recentYear?: string;
}

function DataSetDescription( data : IndicatorProps ) {
    function buttonStyler(dataCategory: String) {
        switch(dataCategory) {
            case "Environmental":
                return "green.9";
            case "Social":
                return "red.9";
            case "Governance":
                return "blue.9"
            default:
                return "yellow.9";
        }
    }

    function SanctionChecker(dataType: String) {
        if (dataType != "Sanctions") {
            return "License: "
        }
    }

    return (
        <Container>
            <Badge color={buttonStyler(data.type)} size="xl" style={{ margin: 20 }}>{data.type}</Badge>
            <Title >
                {data.name}
            </Title>
            <Space h="md" />
            <Text fs="italic">
                Source: <Anchor href={data.sourceLink} target="_blank">{data.source}, {data.recentYear}</Anchor>
            </Text>
            <Text fs="italic">
                {SanctionChecker(data.type)} <Code>{data.license}</Code>
            </Text>
            <Space h="md" />
            <Text style={{ marginBottom: 20}}>
                {data.description}
            </Text>
        </Container>
    );
}

export default DataSetDescription;