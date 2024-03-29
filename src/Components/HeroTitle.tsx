import { createStyles, Title, Text, Button, Container, rem } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

import { Link } from "react-router-dom";
import { Dots } from './Dots';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function HeroText() {
  const { classes } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
      <Container size={800} className={classes.inner}>
        <Title className={classes.title}>
          Discover the impact of {' '}
          <Text component="span" variant="gradient" gradient={{ from: 'govvies.0', to: 'govvies.4' }} inherit>
            ESG criteria
          </Text>{' '}
          on global exposures
        </Title>

        {/* <Container p={0} size={600}> */}
          <Text size="lg" color="dimmed" className={classes.description}>
          What effect do Environmental, Social and Governance (ESG) criteria have on your country exposures? Find out using our world map!
          </Text>
        </Container>

        <div className={classes.controls}>
        <Container size={800} className={classes.inner}>
        <Link to="/map" style={{ textDecoration: 'none' }}>
            <Button
              size="xl"
              className={classes.control}
              // variant="gradient"
              // gradient={{ from: 'govvies.7', to: 'govvies.5' }}
              color="govvies.2"
              onClick={() => scrollTo({ y: 0 })}
            >
              Get started
            </Button>
          </Link>
          </Container>
        </div>
      </div>
    </Container>
  );
}