import React, { useState } from 'react';

import { Minus } from '../../Icons/Minus';

import { Plus } from '../../Icons/Plus';

import {Container, Title, Name, Indicator, Reveal} from './Accordion.Styles'

const Accordion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </Name>
        {collapse ? (
          <Indicator>
            <Minus />
          </Indicator>
        ) : (
          <Indicator>
            <Plus />
          </Indicator>
        )}
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
