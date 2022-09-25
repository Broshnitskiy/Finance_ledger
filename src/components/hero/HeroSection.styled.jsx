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

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 175px;
    height: 57px;
    font-size: 18px;
    line-height: 25px;
    background: ${props => props.theme.colors.$styleColor};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: inherit;
  }

  button:hover {
    background: #2ebf4f;
  }

  button > img {
    display: inline-block;
    margin-right: 8px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    min-height: 1024px;

    h1 {
      font-size: 55px;
      line-height: 75px;
      padding-top: 378px;
    }

    p {
      font-size: 40px;
      line-height: 48px;
    }
  }

  @media screen and (min-width: 1360px) {
    max-width: 1360px;
    min-height: 768px;

    h1 {
      padding-top: 272px;
    }

    p {
      line-height: 54px;
    }
  }
`;
