import styled from 'styled-components';

export const Section = styled.section`
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    display: flex;
  }

  @media screen and (min-width: 1360px) {
    max-width: 1360px;
  }
`;

export const Div = styled.div`
  background-color: #0284d0;
  color: ${props => props.theme.colors.$white};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 79px;
  font-size: 16px;
  line-height: 22px;

  h2 {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 24px;
  }

  button {
    margin-top: 24px;
    margin-bottom: 79px;
    width: 146px;
    height: 54px;
    border: 1px solid ${props => props.theme.colors.$white};
    border-radius: 5px;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }

  button:hover {
    background-color: ${props => props.theme.colors.$white};
    border-color: #0284d0;
    color: #0284d0;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 62px;
    font-size: 18px;
    line-height: 25px;
    order: -1;

    h2 {
      font-size: 40px;
      line-height: 48px;
    }

    button {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1360px) {
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 28px;
  }
`;

export const Picture = styled.picture`
  @media screen and (min-width: 768px) {
    img {
      max-width: 368px;
      min-height: 589px;
      object-fit: cover;
    }

    @media screen and (min-width: 1360px) {
      img {
        max-width: 670px;
        min-height: 460px;
      }
    }
  }
`;

export const Parag = styled.p`
  margin-bottom: 16px;
`;
