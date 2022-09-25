import styled from 'styled-components';
import imgHero1x from '../../images/home/showcase.jpg';
import imgHero2x from '../../images/home/showcase@2x.jpg';

export const Section = styled.section`
  max-width: 480px;
  min-height: 533px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${props => props.theme.colors.$white};
  background-color: #c4c4c4;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${imgHero1x});
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${imgHero2x});
  }

  h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 54px;
    padding-top: 160px;
    margin-bottom: 16px;
  }

  p {
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    min-height: 1024px;
  }

  @media screen and (min-width: 1360px) {
    max-width: 1360px;
    min-height: 768px;
  }
`;
