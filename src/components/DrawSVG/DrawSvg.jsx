import React, { useRef, useLayoutEffect } from 'react';

import Vector from '../../Icons/Vector';

import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

import { Ball, VectorContainer } from './Draw.styles';

const DrawSvg = () => {
  const ref = useRef(null);
  const ballRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    /* Getting the svg element from the DOM. */
    let svg = document.getElementsByClassName('svg-path')[0];

    // const length = svg.getBoundingClientRect();

    const length = svg.getTotalLength();

    /* Setting the strokeDasharray to the length of the svg. */
    svg.style.strokeDasharray = length;

    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const draw = length * self.progress;

          // also reverse the drawing when scroll goes up
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: (self) => {
          if (self.isActive) {
            // console.log('scrolling is active');
            ballRef.current.style.display = 'none';
          } else {
            // console.log('scrolling is not active');
            ballRef.current.style.display = 'inline-block';
          }
        },
      },
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
};

export default DrawSvg;
