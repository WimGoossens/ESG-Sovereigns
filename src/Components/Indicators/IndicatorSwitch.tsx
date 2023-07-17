import { Switch, Space, Group, Text, Popover, Anchor } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

interface IndicatorProps {
    title: string;
    description: string;
    source?: string;
    sourceLink?: string;
    checked: boolean;
    setChecked?: (newType: boolean) => void;
}

function IndicatorSwitch( data : IndicatorProps ) {
    return (
        <>
            <Group position="apart" ml="md">
                <Text>
                    {data.title}
                </Text>
                <Popover width={300} position="left" shadow="md">
                    <Popover.Target>
                        <Text c="dimmed">
                            <IconInfoCircle/>
                        </Text>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Text size="sm">
                            {data.description}
                        </Text>
                        <Space h="xs" />
                        <Text size="sm">
                            Source: <Anchor href={data.sourceLink} target="_blank">{data.source}</Anchor>
                        </Text>
                    </Popover.Dropdown>
                </Popover>
            </Group>
            <Switch
                // label="UN Sanctions list"
                size="md"
                color="orange"
                checked={data.checked}
                onChange={(event) => data.setChecked?.(event.currentTarget.checked)}
                ml="md"
            />
            <Space h="md" />
        </>
    );
}

export default IndicatorSwitch;