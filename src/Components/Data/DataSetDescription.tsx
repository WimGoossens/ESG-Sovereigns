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

    function SanctionChecker(dataType: String, dataLicense: String) {
        if (dataType != "Sanctions") {
            return <Group><Text>License:</Text><Code>{dataLicense}</Code></Group>
        } else {
            return
        }
    }

    return (
        <Container>
            <Title >
             <Badge color={buttonStyler(data.type)} size="xl">{data.type}</Badge> {data.name}
            </Title>
            <Space h="md" />
            <Text fs="italic">
                Source: <Anchor href={data.sourceLink} target="_blank">{data.source}, {data.recentYear}</Anchor>
            </Text>
            {SanctionChecker(data.type, String(data.license))}
            <Space h="md" />
            <Text style={{ marginBottom: 20}}>
                {data.description}
            </Text>
            <Space h="md" />
        </Container>
    );
}

export default DataSetDescription;