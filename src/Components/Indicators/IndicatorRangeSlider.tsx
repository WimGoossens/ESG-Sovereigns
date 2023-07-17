import { RangeSlider, Space, Text, Popover, Group, Anchor } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

interface IndicatorProps {
    title: string;
    min: number;
    max: number;
    marks?: {value: number, label: string}[];
    description?: string;
    source?: string;
    sourceLink?: string;
    step?: number;
    rangeValue: [number, number];
    setRangeValue: (newType: [number, number]) => void;
}

function IndicatorRangeSlider( data : IndicatorProps) {
    return (
        <>
            <Group position="apart" ml="md" mb="md">
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
            <RangeSlider
                marks={data.marks}
                min={data.min}
                max={data.max}
                minRange={0}
                step={data.step}
                label={(value) => `${value.toFixed(1)}`}
                value={data.rangeValue}
                onChange={data.setRangeValue}
                ml="md"
                color="govvies.0"
            />
            <Space h="xl" />
        </>
    );
}

export default IndicatorRangeSlider;