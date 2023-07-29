import { Group, Text, Container, Title, Badge, useMantineTheme } from '@mantine/core';
import DataSetDescription from './Data/DataSetDescription';

import metaData from './Data/metadata.json';

function DataDescription() {
    const theme = useMantineTheme();

    return (
        <Container>
            {metaData.map(block => <DataSetDescription
            name={block.Dataset}
            description={block.Description}
            type={block.Category}
            source={block.Source}
            sourceLink={block.URL}
            license={block.License}
            recentYear={String(block['Recent Year'])}
        /> )}
        </Container>
    );
};

export default DataDescription;