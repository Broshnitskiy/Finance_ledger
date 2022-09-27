import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  padding-top: 56px;
  color: ${props => props.theme.colors.$textColor};

  h2 {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 24px;
  }

  h2 + p {
    margin-bottom: 31px;
  }

  img {
    cursor: pointer;
    object-fit: cover;
    width: 440px;
    margin-bottom: 8px;
    transition: opacity 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  img:hover {
    opacity: 0.6;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    padding-top: 48px;

    h2 {
      font-size: 40px;
      line-height: 54px;
    }

    h2 + p {
      margin-bottom: 30px;
    }

    img {
      width: 222px;
      margin-bottom: 18px;
      margin-left: 18px;
      flex-basis: calc(100% / 3 - 18px);
    }
  }

  @media screen and (min-width: 1360px) {
    line-height: 33px;
    h2 {
      line-height: 48px;
    }
  }
`;

export const P = styled.p`
  margin-bottom: 16px;
`;

export const Div = styled.div`
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -18px;
    margin-left: -18px;
  }

  @media screen and (min-width: 1360px) {
    padding-bottom: 70px;
  }
`;
