import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.$textColor};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 480px;

  p {
    color: ${props => props.theme.colors.$white};
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    p {
      font-size: 18px;
      line-height: 25px;
    }
  }
  @media screen and (min-width: 1360px) {
    max-width: 1360px;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 12px;

  a {
    color: white;
    :hover {
      color: #28a745;
    }
  }

  a:not(:last-child) {
    margin-right: 25px;
  }
`;
