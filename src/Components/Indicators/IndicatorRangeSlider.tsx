import { RangeSlider, Space, Text, Popover, Group } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

interface IndicatorProps {
    title: string;
    min: number;
    max: number;
    marks?: {value: number, label: string}[];
    description?: string;
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
                    </Popover.Dropdown>
                </Popover>
            </Group>
            <RangeSlider
                marks={data.marks}
                minRange={0}
                label={(value) => `${value}%`}
                value={data.rangeValue}
                onChange={data.setRangeValue}
                ml="md"
            />
            <Space h="xl" />
        </>
    );
}

export default IndicatorRangeSlider;