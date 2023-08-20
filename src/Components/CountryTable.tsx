import { useState } from 'react';
import {
  createStyles,
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  Paper,
} from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  th: {
    position: 'sticky',
    top: 0,
    padding: '0 !important',
  },

  control: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  icon: {
    width: rem(21),
    height: rem(21),
    borderRadius: rem(21),
  },
}));

const useStylesHeader = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface RowData {
  country: string;
  alpha2: string;
  alpha3: string;
  sanctionsUN?: string;
  sanctionsEU?: string;
  eligible?: string;
  ecologicalFootprint?: number;
  freedomInTheWorldScore?: number;
  humanDevelopmentIndex?: number;
  womenBusinessAndTheLaw?: number;
  humanCapitalIndex?: number;
  globalPeaceIndex?: number;
  fragileStatesIndex?: number;
  corruptionPerceptionIndex?: number;
  worldRiskIndex?: number;
  environmentalPerformanceIndex?: number;
  aqueduct3?: number;
  nDGAIN?: number;
  pressFreedomIndex?: number;
}

interface TableSortProps {
  data: RowData[];
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useStyles();
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart" noWrap>
          <Group position="left">
            <Text fw={500} fz="sm">
              {children}
            </Text>
          </Group>
          <Group position="right">
            <Icon size="1rem" stroke={1.5} />
          </Group>
        </Group>
      </UnstyledButton>
    </th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => String(item[key]).toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a: any, b: any) => {
      if (payload.reversed) {
        if (a[sortBy] && b[sortBy]) {
          return b[sortBy].localeCompare(a[sortBy]);
        } else if (a[sortBy] && !b[sortBy]) {
          return -1;
        } else if (!a[sortBy] && b[sortBy]) {
          return 1;
        } else {
          return 0;
        }
      }

      if (a[sortBy] && b[sortBy]) {
        return a[sortBy].localeCompare(b[sortBy]);
      } else if (a[sortBy] && !b[sortBy]) {
        return -1;
      } else if (!a[sortBy] && b[sortBy]) {
        return 1;
      } else {
        return 0;
      }
    }),
    payload.search
  );
}

function sortNumericData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        if (a[sortBy] && b[sortBy]) {
          return Number(b[sortBy]) - Number(a[sortBy]);
        } else if (a[sortBy] && !b[sortBy]) {
          return 0 - Number(a[sortBy]);
        } else if (!a[sortBy] && b[sortBy]) {
          return Number(b[sortBy]);
        } else {
          return 0;
        }
      }

      if (a[sortBy] && b[sortBy]) {
        return Number(a[sortBy]) - Number(b[sortBy]);
      } else if (a[sortBy] && !b[sortBy]) {
        return 0 - Number(a[sortBy]);
      } else if (!a[sortBy] && b[sortBy]) {
        return Number(b[sortBy]);
      } else {
        return 0;
      }
    }),
    payload.search
  );
}

function CountryTable({ data }: TableSortProps) {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData, numeric?: Boolean) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    if (numeric) {
      setSortedData(sortNumericData(data, { sortBy: field, reversed, search }));
    } else {
      setSortedData(sortData(data, { sortBy: field, reversed, search }));
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const rows = sortedData.map((row) => (
    <tr key={row.country}>
        <td>{row.country}</td>
        <td>{row.alpha3}</td>
        <td>{row.eligible}</td>
        <td>{row.sanctionsUN}</td>
        <td>{row.sanctionsEU}</td>
        <td>{row.ecologicalFootprint}</td>
        <td>{row.freedomInTheWorldScore}</td>
        <td>{row.humanCapitalIndex}</td>
        <td>{row.humanDevelopmentIndex}</td>
        <td>{row.womenBusinessAndTheLaw}</td>
        <td>{row.globalPeaceIndex}</td>
        <td>{row.fragileStatesIndex}</td>
        <td>{row.corruptionPerceptionIndex}</td>
        <td>{row.worldRiskIndex}</td>
        <td>{row.environmentalPerformanceIndex}</td>
        <td>{row.aqueduct3}</td>
        <td>{row.nDGAIN}</td>
        <td>{row.pressFreedomIndex}</td>
    </tr>
  ));

  const { classes, cx } = useStylesHeader();
  const [scrolled, setScrolled] = useState(false);

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<IconSearch size="0.9rem" stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Paper withBorder>
        <ScrollArea.Autosize miw={1100} mx='auto' w={'100%'} h={400}>
          <Table sx={{ tableLayout: 'auto', width: "100%" }}>
            <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
              <tr>
              <Th
                  sorted={sortBy === 'country'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('country')}
                >
                  Country
                </Th>
                <Th
                  sorted={sortBy === 'alpha3'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('alpha3')}
                >
                  Alpha-3
                </Th>
                <Th
                  sorted={sortBy === 'eligible'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('eligible')}
                >
                  Eligibility
                </Th>
                <Th
                  sorted={sortBy === 'sanctionsUN'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('sanctionsUN')}
                >
                  UN Sanctions?
                </Th>
                <Th
                  sorted={sortBy === 'sanctionsEU'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('sanctionsEU')}
                >
                  EU Sanctions?
                </Th>
                <Th
                  sorted={sortBy === 'ecologicalFootprint'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('ecologicalFootprint', true)}
                >
                  Ecological Footprint
                </Th>
                <Th
                  sorted={sortBy === 'freedomInTheWorldScore'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('freedomInTheWorldScore', true)}
                >
                  Freedom in the World Score
                </Th>
                <Th
                  sorted={sortBy === 'humanCapitalIndex'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('humanCapitalIndex', true)}
                >
                  Human Capital Index
                </Th>
                <Th
                  sorted={sortBy === 'humanDevelopmentIndex'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('humanDevelopmentIndex', true)}
                >
                  Human Development Index
                </Th>
                <Th
                  sorted={sortBy === 'womenBusinessAndTheLaw'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('womenBusinessAndTheLaw', true)}
                >
                  Women, Business and the Law
                </Th>
                <Th
                  sorted={sortBy === 'globalPeaceIndex'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('globalPeaceIndex', true)}
                >
                  Global Peace Index
                </Th>
                <Th
                  sorted={sortBy === 'fragileStatesIndex'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('fragileStatesIndex', true)}
                >
                  Fragile States Index
                </Th>
                <Th
                  sorted={sortBy === 'corruptionPerceptionIndex'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('corruptionPerceptionIndex', true)}
                >
                  Corruption Perception Index
                </Th>
                <Th
                  sorted={sortBy === 'worldRiskIndex'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('worldRiskIndex', true)}
                >
                  World Risk Index
                </Th>
                <Th
                  sorted={sortBy === 'environmentalPerformanceIndex'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('environmentalPerformanceIndex', true)}
                >
                  Environmental Performance Index
                </Th>
                <Th
                  sorted={sortBy === 'aqueduct3'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('aqueduct3', true)}
                >
                  Aqueduct 3.0
                </Th>
                <Th
                  sorted={sortBy === 'nDGAIN'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('nDGAIN', true)}
                >
                  ND-GAIN
                </Th>
                <Th
                  sorted={sortBy === 'pressFreedomIndex'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('pressFreedomIndex', true)}
                >
                  Press Freedom Index
                </Th>
              </tr>
            </thead>
            <tbody>
              {rows.length > 0 ? (
                rows
              ) : (
                <tr>
                  <td colSpan={Object.keys(data[0]).length}>
                    <Text weight={500} align="center">
                      Nothing found
                    </Text>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </ScrollArea.Autosize>
      </Paper>
    </ScrollArea>
  );
}

export default CountryTable;