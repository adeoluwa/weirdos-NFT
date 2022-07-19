import React from 'react';

import {
  Item,
  ImageContainer,
  Name,
  Position,
  Section,
  Title,
  Container,
} from './Team.styles';

import img1 from '../../../assets/Nfts/bighead.svg';

import img2 from '../../../assets/Nfts/bighead-1.svg';

import img3 from '../../../assets/Nfts/bighead-2.svg';

import img4 from '../../../assets/Nfts/bighead-3.svg';

import img5 from '../../../assets/Nfts/bighead-4.svg';

import img6 from '../../../assets/Nfts/bighead-5.svg';

import img7 from '../../../assets/Nfts/bighead-6.svg';

import img8 from '../../../assets/Nfts/bighead-7.svg';

import img9 from '../../../assets/Nfts/bighead-8.svg';

import img10 from '../../../assets/Nfts/bighead-9.svg';

import img11 from '../../../assets/Nfts/bighead-10.svg';

import ConfettiComponent from '../../Confetti/Confetti';

const MemeberComponenet = ({ img, name = ' ', position = ' ' }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <ConfettiComponent />
      <Title>Team</Title>
      <Container>
        <MemeberComponenet img={img5} name="Black Shinobi" position="Founder" />
        <MemeberComponenet img={img1} name="Ashanti" position="Co Founder" />
        <MemeberComponenet img={img2} name="Jiraya" position="Artist" />
        <MemeberComponenet img={img3} name="Nagato" position="Director" />
        <MemeberComponenet img={img4} name="Hunter" position="Manager" />
        <MemeberComponenet
          img={img6}
          name="Nut Wells"
          position="Social Media Manager"
        />
        <MemeberComponenet
          img={img7}
          name="Shinju Sama"
          position="Blockchain Specialist"
        />
        <MemeberComponenet img={img8} name="Code Beast" position="Dev lead" />
        <MemeberComponenet
          img={img9}
          name="Drake Ino"
          position="Web3 Developer"
        />
        <MemeberComponenet
          img={img10}
          name="Foster Wintrop"
          position="Backend Developer"
        />
        <MemeberComponenet img={img11} name="Monk" position="Dev Ops" />
      </Container>
    </Section>
  );
};

export default Team;
