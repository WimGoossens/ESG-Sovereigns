import Content from './Views/Content';
import Header from './Components/Header';
import {HeaderMegaMenu} from './Components/HeaderCopy';
import Footer from './Components/Footer';
import { MantineProvider } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <TypographyStylesProvider>
        <HeaderMegaMenu />
        <Content />
        <Footer />
      </TypographyStylesProvider>
    </MantineProvider>
  );
}

export default App;