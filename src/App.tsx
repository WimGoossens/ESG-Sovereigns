import { useState } from 'react';
import Content from './Views/Content';
import {HeaderMegaMenu} from './Components/Header';
import Footer from './Components/Footer';
import { MantineProvider, ColorScheme, ColorSchemeProvider, ScrollArea } from '@mantine/core';
// import { TypographyStylesProvider } from '@mantine/core';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{
          colorScheme:colorScheme,
          loader: 'bars',
          primaryColor: 'orange',
          fontFamily: 'Roboto',
          defaultRadius: 5,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <HeaderMegaMenu />
        <Content />
        <Footer />
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;