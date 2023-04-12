import { useState } from 'react';
import {HeaderMegaMenu} from './Components/Header';
import Footer from './Components/Footer/Footer';
import FooterJson from './Components/Footer/footer.json';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Outlet } from 'react-router-dom';

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
          <Outlet />
          <Footer data={FooterJson.props.data}/>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;