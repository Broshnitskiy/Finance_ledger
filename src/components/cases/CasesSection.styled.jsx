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
