import styled from 'styled-components';

export const Section = styled.section`
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;

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
  padding-bottom: 25px;

  h2 {
    text-align: center;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 69px;
  }

  form {
    width: 280px;
    margin-left: auto;
    margin-right: auto;
  }

  button {
    display: block;
    margin-top: 25px;
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
    padding-bottom: 0;

    h2 {
      font-size: 40px;
      line-height: 54px;
      margin-bottom: 24px;
      text-align: left;
    }

    form {
      width: 336px;
      margin-left: 0;
      margin-right: 0;
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

    form {
      width: 642px;
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

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 56px;
  padding-left: 8px;
  font-size: 16px;
  line-height: 23px;
  &:first-child {
    margin-bottom: 16px;
  }

  background: #ffffff;
  border: none;
  border-radius: 5px;
  ::placeholder {
    color: #808080;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const ErrorWraper = styled.div`
  display: flex;
`;

export const TextError = styled.span`
  width: 280px;
  word-break: break-all;
  color: red;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;
