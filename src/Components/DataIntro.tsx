import { createStyles, Container, Text, Button, Group, rem } from '@mantine/core';
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
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

  title: {
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

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

export function DataIntro() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        {/* <h1 className={classes.title}>
          Quantifying ESG is difficult. Luckily, you're not alone!
        </h1> */}

          {/* <Text size="lg" color="dimmed" className={classes.description}>
          In recent years, the focus on Environmental, Social, and Governance (ESG) factors has gained considerable momentum, as corporations and investors alike recognize the significance of sustainability and responsible governance. This evolving interest has sparked a surge in the use of various ESG data sources on sovereigns, allowing stakeholders to gain a comprehensive understanding of a country's performance in critical areas.
          </Text> */}
          <Text size="lg" color="dimmed" className={classes.description}>
          Here you can find descriptions of the data sets that power the govvies.info world map. The selection was based on the practical guide to ESG integration in sovereign debt distributed by the United Nations Principles for Responsible Investments (UNPRI).
          </Text>
      </Container>
    </div>
  );
}

export default DataIntro;