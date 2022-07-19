import React from 'react';

import {
  Section,
  Container,
  IconList,
  Left,
  MenuItems,
  Item,
  Bottom,
} from './Footer.styles';

import Banner from '../Banner/Banner';

import Logo from '../Logo/Logo';

import Twitter from '../../Icons/Twitter';

import Linkedin from '../../Icons/LinkedIn';

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a
              href="https://twitter.com/deeollu"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-odamo-448220226/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo('home')}>Home</Item>
          <Item onClick={() => scrollTo('about')}>About</Item>
          <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>

          <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
          <Item onClick={() => scrollTo('team')}>Team</Item>
          <Item onClick={() => scrollTo('faq')}>Faq</Item>
        </MenuItems>
      </Container>

      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Weirdo Club. All rights reserved.
          (kiddin)
        </span>
        <span>Made with lot of &#10084;</span>
      </Bottom>
    </Section>
  );
};

export default Footer;
