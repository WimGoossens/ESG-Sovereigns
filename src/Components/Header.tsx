import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Image,
  Title
} from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { ActionToggle } from './ColorSwitch';
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));


export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();

  const buttonHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    scrollTo({ y: 0 });
    toggleDrawer();
  };

  return (
    <Box pb={120}>
      <Header height={60} px="md" fixed={true}>
        <Group position="apart" sx={{ height: '100%' }}>
            <Link to="/" style={{ textDecoration: 'none' }} onClick={() => scrollTo({ y: 0 })}>
            <Group>
              <Image src={require('../Images/logo.png')} maw={45} alt={'logo'} mx="auto" />
              <Title order={2} color="govvies.0">
                govvies.info
              </Title>
            </Group>
            </Link>
          <Group position="center" sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <Link to="/" style={{ textDecoration: 'none' }} className={classes.link} onClick={() => scrollTo({ y: 0 })}>
              Home
            </Link>
            <Link to="/data" style={{ textDecoration: 'none' }} className={classes.link} onClick={() => scrollTo({ y: 0 })}>
              Data
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }} className={classes.link} onClick={() => scrollTo({ y: 0 })}>
              About
            </Link>
          </Group>

          <Group position="right" className={classes.hiddenMobile}>
            <ActionToggle/>
            <Link to="/map" onClick={() => scrollTo({ y: 0 })}>
              <Button
              // variant="gradient"
              // gradient={{ from: 'govvies.7', to: 'govvies.5' }}
              color="govvies.2"
              radius="xl"
              h={30}>
                Go to world map
              </Button>
            </Link>
          </Group>
          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="80%"
        padding="md"
        title={<Group>
        <Image src={require('../Images/logo.png')} maw={45} alt={'logo'} mx="auto" />
        <Title order={2} color="govvies.0" fw={400}>
          govvies.info
        </Title>
      </Group>}
        className={classes.hiddenDesktop}
        zIndex={1000000}
        position="right"
      >
        <ScrollArea h={`calc(70vh - ${rem(60)})`} mx="md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
            <Link to="/" style={{ textDecoration: 'none' }} className={classes.link} onClick={buttonHandler}>
              Home
            </Link>
          <Link to="/data" style={{ textDecoration: 'none' }} className={classes.link} onClick={buttonHandler}>
            Data
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }} className={classes.link} onClick={buttonHandler}>
            About
          </Link>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
            <Link to="/map" style={{ textDecoration: 'none' }} onClick={buttonHandler}>
              <Button 
              // variant="gradient"
              // gradient={{ from: 'govvies.7', to: 'govvies.5' }}
              color="govvies.2"
              radius="xl"
              h={30}>
                  Go to world map
              </Button>
            </Link>
          
        </ScrollArea>
        <ActionToggle />
      </Drawer>
    </Box>
  );
}

export default HeaderMegaMenu;