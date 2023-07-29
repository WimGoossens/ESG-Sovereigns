import { Paper, Group, ThemeIcon } from "@mantine/core";

function Maplegend() {
    

    return (
        <Paper p="md">
            <Group position="center">
                <ThemeIcon color="govvies.0">
                </ThemeIcon>
                Eligible
                <ThemeIcon color="govvies.2">
                </ThemeIcon>
                Ineligible
                <ThemeIcon color="govvies.5">
                </ThemeIcon>
                No data
            </Group>
        </Paper> 
    );
}

export default Maplegend;