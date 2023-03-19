import { Button, Badge, Burger, Drawer, Code, Title, Anchor, Text } from '@mantine/core';
import { UnstyledButton, Group, Avatar } from '@mantine/core';
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    //const theme = useMantineTheme();
    const [opened, setOpened] = React.useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
        <header>
            <div className="content-desktop">
                <div>
                    <Badge size="lg" radius={10} color="yellow">govvies.info</Badge>
                </div>
                <div className="navbar">
                    <div className="navbar-item"><Link to="section-one" smooth duration={500}>Carousel</Link></div>
                    <div className="navbar-item"><Link to="section-four" smooth duration={500}>Cards</Link></div>
                    <div className="navbar-item"><Link to="section-five" smooth duration={500}>FAQS</Link></div>

                    <Button color="yellow" onClick={() => redirectToLink('../map')}>Check out Mantine</Button>
                </div>
            </div>

            <div className="content-mobile">
                <div className="burger-button">
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        title={title}
                        size="sm"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};