import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.$textColor};
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;

  p {
    color: ${props => props.theme.colors.$white};
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 18px;
      line-height: 25px;
    }
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
