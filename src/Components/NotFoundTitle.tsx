import { createStyles, Title, Text, Button, Container, Group, rem, useMantineTheme, Space } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    paddingBottom: rem(80),
    paddingTop: rem(80),
  },

  inner: {
    position: 'relative',
    // paddingTop: rem(200),
    paddingBottom: rem(120),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    textAlign: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),
    textAlign: 'left',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan('sm')]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

export function NotFoundTitle() {
  // const { classes, theme } = useStyles();
  const theme = useMantineTheme();

  return (
    <Container >
      <Text
        align="center"
        weight={900}
        size={rem(220)}
        color={theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}>
        404
      </Text>
        {/* <div className={classes.label}>404</div> */}
        <Title order={1} align="center">
          You have found a secret place.
        </Title>
        <Space h="xl"/>
        <Text color="dimmed" size="lg" align="center">
          The page you are trying to open does not exist. You may have mistyped the address, 
          or the page has been moved to another URL. If you think this is an error, please contact support.
        </Text>
        <Space h="xl"/>
        <Group position="center">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="subtle" size="md" color='govvies.4'>
              Take me back to home page
            </Button>
          </Link>
        </Group>
        {/* <Text c="govvies.0">0</Text>
        <Text c="govvies.1">1</Text>
        <Text c="govvies.2">2</Text>
        <Text c="govvies.3">3</Text>
        <Text c="govvies.4">4</Text>
        <Text c="govvies.5">5</Text>
        <Text c="govvies.6">6</Text>
        <Text c="govvies.7">7</Text>
        <Text c="govvies.8">8</Text>
        <Text c="govvies.9">9</Text> */}
    </Container>
  );
}

export default NotFoundTitle;