import React, { useRef, useLayoutEffect } from 'react';

import {Section, Title, Container, Box} from './Faq.styles'

import Accordion from '../../Accordion/Accordion';

import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';


const Faq = () => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {};
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="WHAT IS THE METAVERSE?">
            A metaverse is a network of 3D virtual worlds focused on social
            connection. In futurism and science fiction, it is often described
            as a hypothetical iteration of the Internet as a single, universal
            virtual world that is facilitated by the use of virtual and
            augmented reality headsets.
          </Accordion>
          <Accordion title="WHY DO WE NEED ROYALTIES?">
            The amount of royalties was fixed at 5% to finance the Weirdos
            Club's projects. We have the ambition to organize multiple events
            around the world in order to strengthen the community and build a
            network of entrepreneurs and investors with the same mindset and
            common interests.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="HOW CAN I USE MY NFT?">
            You will be able to use your NFT as an avatar in the Metaverse and
            our future video game. Holding also means that you are part of an
            exclusive network of investors and entrepreneurs.
          </Accordion>
          <Accordion title="WHAT ARE THE WEIRDOS?">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            provident, molestias deserunt doloremque expedita praesentium iusto
            dignissimos recusandae rerum labore quasi omnis vel perspiciatis
            sint? Nam cumque facere voluptatibus sapiente!
          </Accordion>
          <Accordion title="WHAT IS THE FUSION PROCESS?">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste
            voluptates blanditiis repellat non praesentium pariatur. Maxime,
            sunt. Perspiciatis vel esse quam labore repudiandae soluta deleniti
            dolores ea laboriosam dolorem.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
