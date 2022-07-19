import React, { useState } from 'react';

import {Section, NavBar, HamburgerMenu, Menu, MenuItem} from './navigation.styles'

import Logo from '../Logo/Logo';

import Button from '../Button/Button';

const Navigation = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    setClick(!click);
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>

        <Menu click={click}>
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>

          <MenuItem>
            <div className="mobile">
              <Button text="Connect Wallet" link="https://google.com" />
            </div>
          </MenuItem>
        </Menu>

        <div className="desktop">
          <Button text="Connect Wallet" link="https://google.com" />
        </div>
      </NavBar>
    </Section>
  );
};

export default Navigation;
