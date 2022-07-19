import React, { useRef, useLayoutEffect } from 'react';

import {
  Section,
  Item,
  ItemContainer,
  Box,
  SubTitle,
  Title,
  Text,
  Container,
  SvgContainer,
  Items,
} from './Roadmap.styles';

import DrawSvg from '../../DrawSVG/DrawSvg';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';

const RoadMapItem = ({ title, subtext, addToRefs }) => {
  return (
    <Item ref={addToRefs}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const reavealRefs = useRef([]);
  reavealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !reavealRefs.current.includes(el)) {
      reavealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    reavealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0',
        },
        {
          y: '-30%',

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
    });

    return () => {};
  }, []);

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRefs={addToRefs}
            title="Grand Opening"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Great Benefits"
            subtext=" Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Pla"
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Early Access"
            subtext=" Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Pla"
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="New Merch"
            subtext=" Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Pla"
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Holders Ranking"
            subtext=" Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Pla"
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
