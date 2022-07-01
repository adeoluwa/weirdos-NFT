import React from 'react'

import styled from 'styled-components'

const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <Section>
      Footer
    </Section>
  )
}

export default Footer 