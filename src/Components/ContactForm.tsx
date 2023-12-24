import { createStyles, Container, Text, Title, Stack, Button, useMantineTheme, Center, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
  },

  inner: {
    position: 'relative',
    paddingBottom: rem(120),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    // fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,

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

//   controls: {
//     marginTop: `calc(${theme.spacing.xl} * 2)`,

//     [theme.fn.smallerThan('sm')]: {
//       marginTop: theme.spacing.xl,
//     },
//   },

//   control: {
//     height: rem(54),
//     paddingLeft: rem(38),
//     paddingRight: rem(38),

//     [theme.fn.smallerThan('sm')]: {
//       height: rem(54),
//       paddingLeft: rem(18),
//       paddingRight: rem(18),
//       flex: 1,
//     },
//   },
}));

export function ContactForm() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    // <div className={classes.wrapper}>
      <Container
      fluid
    //   bg={theme.colors.govvies[5]}
      bg={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.0'}
      >
        <Center>
            <Stack>
                <Title
                className={classes.title}
                order={2}
                style={{ marginTop: 50 }}
                align="center"
                >
                    Interested?
                </Title>
                <Text
                align="center"
                >
                  Leave your information if you think we could help you.
                </Text>
                <Button
                component="a"
                href="https://forms.office.com/e/nqEYTfJTg8"
                target="_blank"
                size="sm"
                radius="md"
                mt="xl"
                // variant="gradient"
                color="govvies.2"
                // gradient={{ from: 'govvies.7', to: 'govvies.5' }}
                style={{ marginBottom: 50 }}
                >
                Contact form
                </Button>
            </Stack>   
        </Center>
      </Container>
    // </div>
  );
}

export default ContactForm;