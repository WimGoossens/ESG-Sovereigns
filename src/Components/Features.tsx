import {
    Image,
    Text,
    Container,
    ThemeIcon,
    Title,
    SimpleGrid,
    createStyles,
    rem,
  } from '@mantine/core';
  import IMAGES from './Features/index';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  
    item: {
      display: 'flex',
    },
  
    itemIcon: {
      padding: theme.spacing.xs,
      marginRight: theme.spacing.md,
      backgroundColor: theme.colors.govvies[5],
      // gradient={{ from: 'govvies.4', to: 'govvies.5' }},
    },
  
    itemTitle: {
      marginBottom: `calc(${theme.spacing.xs} / 2)`,
    },
  
    supTitle: {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 800,
      fontSize: theme.fontSizes.sm,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      letterSpacing: rem(0.5),
    },
  
    title: {
      lineHeight: 1,
      textAlign: 'center',
      marginTop: theme.spacing.xl,
    },
  
    description: {
      textAlign: 'center',
      marginTop: theme.spacing.xs,
    },
  
    highlight: {
      backgroundColor: theme.colors.govvies[7],
      padding: rem(5),
      paddingTop: 0,
      borderRadius: theme.radius.sm,
      display: 'inline-block',
      color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
    },
  }));
  
  interface FeatureImage {
    image: string;
    title: React.ReactNode;
    description: React.ReactNode;
  }
  
  interface FeaturesImagesProps {
    supTitle: React.ReactNode;
    description: React.ReactNode;
    data: FeatureImage[];
  }
  
  export function FeaturesImages({ supTitle, description, data }: FeaturesImagesProps) {
    const { classes } = useStyles();
  
    const items = data.map((item) => (
      <div className={classes.item} key={item.image}>
        {/* <ThemeIcon variant="gradient" className={classes.itemIcon} size={60} radius="md" gradient={{ from: 'govvies.1', to: 'govvies.5' }}> */}
        <ThemeIcon variant="gradient" gradient={{ from: 'govvies.1', to: 'govvies.5' }}>
          <Image src={IMAGES[item.image]} />
        </ThemeIcon>
  
        <div>
          <Text fw={700} fz="lg" className={classes.itemTitle}>
            {item.title}
          </Text>
          <Text c="dimmed">{item.description}</Text>
        </div>
      </div>
    ));
  
    return (
      <Container size={700} className={classes.wrapper}>
        <Text className={classes.supTitle} c="govvies.0">{supTitle}</Text>
  
        <Title className={classes.title} order={2}>
          govvies.info is <span className={classes.highlight}>not</span> just for investors
        </Title>
  
        <Container size={660} p={0}>
          <Text color="dimmed" className={classes.description}>
            {description}
          </Text>
        </Container>
  
        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
          style={{ marginTop: 30 }}
        >
          {items}
        </SimpleGrid>
      </Container>
    );
  }

  export default FeaturesImages;