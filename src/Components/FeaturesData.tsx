import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    Button,
    ThemeIcon,
    Grid,
    Col,
    rem,
    Container,
  } from '@mantine/core';
  import { LuLeaf, LuLandmark, LuHeartHandshake, LuXOctagon } from 'react-icons/lu';
  import { Link } from 'react-router-dom';
  import { useWindowScroll } from '@mantine/hooks';

  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(36),
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: theme.spacing.md,
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
  
  const features = [
    {
      icon: LuLeaf,
      title: 'Environmental',
      description: "Environmental factors involve considerations of a country's overall impact on the environment and the potential risks and opportunities it faces because of environmental issues.",
    },
    {
      icon: LuHeartHandshake,
      title: 'Social',
      description: "Social factors address how a government treats different groups of people, including its own inhabitants, minorities, foreigners and more.",
    },
    {
      icon: LuLandmark,
      title: 'Governance',
      description: "Governance factors examine how a country polices itself, focusing on internal controls and practices to maintain compliance with international law and treaties.",
    },
    {
      icon: LuXOctagon,
      title: 'Sanctions',
      description: "Sanctions can be imposed on countries or regimes, in cases where they are violating human rights, waging war or endangering international peace and security.",
    },
  ];
  
  export function FeaturesTitle() {
    const { classes } = useStyles();
    const [scroll, scrollTo] = useWindowScroll();
  
    const items = features.map((feature) => (
      <div key={feature.title}>
        <ThemeIcon
          size={44}
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: 'govvies.4', to: 'govvies.0' }}
        >
          <feature.icon size={rem(26)} />
        </ThemeIcon>
        <Text fz="lg" mt="sm" fw={500}>
          {feature.title}
        </Text>
        <Text c="dimmed" fz="sm">
          {feature.description}
        </Text>
      </div>
    ));
  
    return (
      <div className={classes.wrapper}>
        <Container>
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
              Because ESG has impact on sovereigns too
            </Title>
            <Text c="dimmed">
              By using ESG information about sovereigns, you are able to spot sustainability risks and opportunities more easily.
            </Text>

            <Link to="/data" style={{ textDecoration: 'none' }} onClick={() => scrollTo({ y: 0 })}>
            <Button
              size="sm"
              radius="md"
              mt="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'govvies.7', to: 'govvies.5' }}
              onClick={() => scrollTo({ y: 0 })}
            >
              Data description
            </Button>
            {/* <Button
              variant="gradient"
              gradient={{ deg: 133, from: 'govvies.0', to: 'govvies.4' }}
              size="lg"
              radius="md"
              mt="xl"
            >
              Data description
            </Button> */}
            </Link>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
        </Container>
      </div>
    );
  }

  export default FeaturesTitle;