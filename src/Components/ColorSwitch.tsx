import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { LuSun,
  LuMoonStar
} from "react-icons/lu";

export function ActionToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          // backgroundColor:
          //   theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.govvies[7] : theme.colors.govvies[4],
        })}
      >
        {colorScheme === 'dark' ? <LuSun size="1.2rem" /> : <LuMoonStar size="1.2rem" />}
      </ActionIcon>
    </Group>
  );
}

export default ActionToggle;