import React, { useRef } from 'react';

import {ImgContainer, Details, Price, Section, Row} from './Showcase.styles'

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

import ETH from '../../../assets/icons8-ethereum-48.png';



const NFTItem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  };

  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Weirdos</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NFTItem img={img1} number={73} price={1.5} passRef={Row1Ref} />
        <NFTItem img={img2} number={105} price={1} passRef={Row1Ref} />
        <NFTItem img={img3} number={100} price={1.2} passRef={Row1Ref} />
        <NFTItem img={img4} number={107} price={2.5} passRef={Row1Ref} />
        <NFTItem img={img5} number={57} price={1.6} passRef={Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NFTItem img={img6} number={45} price={1} passRef={Row2Ref} />
        <NFTItem img={img7} number={17} price={2.4} passRef={Row2Ref} />
        <NFTItem img={img8} number={67} price={3.1} passRef={Row2Ref} />
        <NFTItem img={img9} number={12} price={1.4} passRef={Row2Ref} />
        <NFTItem img={img10} number={102} price={1.5} passRef={Row2Ref} />
      </Row>
    </Section>
  );
};

export default Showcase;
