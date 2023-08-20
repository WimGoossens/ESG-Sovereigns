import { Accordion, Text, Container, Title, Badge, useMantineTheme } from '@mantine/core';
import { Link } from "react-router-dom";
import { LuClock4,
    LuMailQuestion,
    LuCircuitBoard,
    LuDatabase,
    LuMoonStar,
    LuActivity
} from "react-icons/lu";


const FrequentlyAskedQuestions = () => {
    const theme = useMantineTheme();

    return (
        <section id="faq">
            <Container>

                <div style={{ marginBottom: 30 }}>
                    <div style={{ textAlign: 'left' }}><Badge variant="filled" color="govvies.0">FAQ</Badge></div>
                    <Text>
                        <Title order={1} style={{ marginTop: 10 }}>Frequently asked questions</Title>
                    </Text>
                </div>

                <Accordion variant="contained">
                    <Accordion.Item value="usage">
                        <Accordion.Control icon={<LuCircuitBoard size={20} color={theme.colors.govvies[2]} />}>
                            Can we use the information from the govvies.info world map?
                        </Accordion.Control>
                        <Accordion.Panel>
                            Yes! As long as you respect the license of the data set(s) you're using, you can use the information for any purpose you would like.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="data">
                        <Accordion.Control icon={<LuClock4 size={20} color={theme.colors.govvies[2]} />}>
                            How recent is the data in the world map?
                        </Accordion.Control>
                        <Accordion.Panel>
                            At the time of building govvies.info, I used the most recent data that was available. Please see the <Link to="/data" style={{ textDecoration: 'none' }}>Data page</Link> for a full description.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="updates">
                        <Accordion.Control icon={<LuActivity size={20} color={theme.colors.govvies[2]} />}>
                            Will you update the database when new data becomes available?
                        </Accordion.Control>
                        <Accordion.Panel>
                            Yes, I will try to do so. However, keep in mind that this is a side project for me so don't expect instant updates.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="ownership">
                        <Accordion.Control icon={<LuDatabase size={20} color={theme.colors.govvies[2]} />}>
                            Did you produce the ESG data in the world map?
                        </Accordion.Control>
                        <Accordion.Panel>
                            No, the ESG data was created by various third parties and I do not claim to be the owner.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="darkmode">
                        <Accordion.Control icon={<LuMoonStar size={20} color={theme.colors.govvies[2]} />}>
                            Is the website available in dark mode?
                        </Accordion.Control>
                        <Accordion.Panel>
                            Yes, just click on the moon icon in the upper right on desktop. On mobile, the moon icon resides in the hamburger menu. Click on the sun icon to revert to light mode!
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="reach_out">
                        <Accordion.Control icon={<LuMailQuestion size={20} color={theme.colors.govvies[2]} />}>
                            How can we reach you?
                        </Accordion.Control>
                        <Accordion.Panel>
                            Reach out to me via <a href="https://www.linkedin.com/in/wimgoossens93/" target="_blank" rel="noreferrer">LinkedIn</a>.
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );

};

export default FrequentlyAskedQuestions;