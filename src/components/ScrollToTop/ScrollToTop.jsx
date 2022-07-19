import React, { useRef, useLayoutEffect } from 'react';

import { useWindowScroll } from 'react-use';

import {Up} from './scroll.styles'

const ScrollToTop = () => {
  const ref = useRef(null);

  const { y } = useWindowScroll();

  const scrollTo = () => {
    let element = document.getElementById('navigation');

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  useLayoutEffect(() => {
    if (y > 200) {
      ref.current.style.display = 'flex';
    } else {
      ref.current.style.display = 'none';
    }

    return () => {};
  }, [y]);

  return (
    <Up ref={ref} onClick={() => scrollTo()}>
      &#x2191;
    </Up>
  );
};

export default ScrollToTop;
