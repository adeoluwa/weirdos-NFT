import React from 'react';

import {Section, Container, Box, Round, Circle} from './Home.styles'

import TypeWriterText from '../../TypeWritterText/TypeWriterText';

import CoverVideo from '../../CoverVideo/CoverVideo';

import RoundTextBlack from '../../../assets/Rounded-Text-Black.png';

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
        <Box>
          <CoverVideo />
        </Box>

        <Round>
          <Circle>
            &#x2193;
            {/* hex code for Arrow Down */}
          </Circle>
          <img src={RoundTextBlack} alt="NFT" />
        </Round>
      </Container>
    </Section>
  );
};

export default Home;
