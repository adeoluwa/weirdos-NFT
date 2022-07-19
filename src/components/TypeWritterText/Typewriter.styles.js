import styled from 'styled-components';

export const Title = styled.div`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
  }

  .text-1 {
    color: blue;
  }

  .text-2 {
    color: orange;
  }

  .text-3 {
    color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

export const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${(props) => props.theme.textRgba}, (0.6))`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  display: flex;

  @media (max-width: 48em) {
    align-items: center;
    text-align: center;

    button {
      margin: 0 auto;
      justify-content: center;
    }
  }
`;
