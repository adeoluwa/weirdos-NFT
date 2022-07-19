import React from 'react';

import { ThemeProvider } from 'styled-components';

import Navigation from './components/Navigation/Navigation'

import Home from './components/sections/Home/Home';

import About from './components/sections/About/About'

import Roadmap from './components/sections/Roadmap/Roadmap'

import Showcase from './components/sections/Showcase/Showcase'

import Team from './components/sections/Team'

import Faq from './components/sections/Faq/Faq'

import Footer from './components/Footer/Footer'

import GlobalStyles from './styles/GlobalStyles';

import {light} from './styles/Themes'

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation/>
        <Home/>
        <About/>
        <Roadmap/>
        <Showcase/>
        <Team/>
        <Faq/>
        <Footer/>
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
