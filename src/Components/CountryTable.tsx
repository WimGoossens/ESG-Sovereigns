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
} from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  th: {
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

interface RowData {
  country: string;
  alpha2: string;
  alpha3: string;
  ecologicalFootprint?: number;
  freedomInTheWorld?: number;
  countrySanction?: string;
  eligible?: string;
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
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size="0.9rem" stroke={1.5} />
          </Center>
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
        {/* <td>{row.alpha2}</td> */}
        <td>{row.alpha3}</td>
        <td>{row.eligible}</td>
        <td>{row.ecologicalFootprint}</td>
        <td>{row.freedomInTheWorld}</td>
        <td>{row.countrySanction}</td>
    </tr>
  ));

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<IconSearch size="0.9rem" stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} sx={{ tableLayout: 'fixed' }}>
        <thead>
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
              Eligible
            </Th>
            <Th
              sorted={sortBy === 'ecologicalFootprint'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('ecologicalFootprint', true)}
            >
              Ecological Footprint
            </Th>
            <Th
              sorted={sortBy === 'freedomInTheWorld'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('freedomInTheWorld', true)}
            >
              Freedom in the World
            </Th>
            <Th
              sorted={sortBy === 'countrySanction'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('countrySanction')}
            >
              Sanctions?
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
    </ScrollArea>
  );
}

export default CountryTable;