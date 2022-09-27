import styled from 'styled-components';

export const Section = styled.section`
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 25px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    display: flex;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1360px) {
    max-width: 1360px;
    padding-bottom: 0;
  }
`;

export const Div = styled.div`
  background-color: #f4f4f4;
  color: ${props => props.theme.colors.$textColor};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 51px;

  h2 {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 69px;
  }

  button {
    font-size: 18px;
    line-height: 25px;
    width: 155px;
    height: 57px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.$styleColor};
    color: ${props => props.theme.colors.$white};
    cursor: pointer;
  }

  button:hover {
    background-color: #2ebf4f;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;

    h2 {
      font-size: 40px;
      line-height: 54px;
      margin-bottom: 24px;
    }

    button {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1360px) {
    padding-top: 56px;
    padding-left: 20px;
    padding-right: 28px;

    h2 {
      margin-bottom: 31px;
    }
  }
`;

export const Picture = styled.picture`
  @media screen and (min-width: 768px) {
    img {
      max-width: 368px;
      min-height: 354px;
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
