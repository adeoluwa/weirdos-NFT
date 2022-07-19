import React from 'react';

import TypeWriter from 'typewriter-effect';

import { Title, SubTitle, ButtonContainer } from './Typewriter.styles';

import Button from '../Button/Button';

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover a new era of
        <br />
        cool
        <TypeWriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">NFTs.</span> ')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-2">Collectable items. </span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-3">Ape Killers! </span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Bored of Apes? Try Something New.</SubTitle>
      <ButtonContainer>
        <Button text="Explore" link="#about" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
