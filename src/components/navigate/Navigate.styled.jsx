import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  z-index: 100;
  padding-top: 22px;
  padding-bottom: 12px;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  background-color: ${prop => (prop.scrolled ? 'rgba(0, 0, 0, 0.6)' : 'unset')};

  @media (max-width: 480px) {
    width: 480px;
  } ;
`;

export const Div = styled.div`
  ul {
    display: flex;
    justify-content: center;

    font-size: 16px;
    line-height: 22px;

    color: ${props => props.theme.colors.$white};

    a {
      padding-top: 6px;
      padding-bottom: 6px;
    }

    li:not(:last-child) {
      margin-right: 12px;
    }

    li :hover {
      border-bottom: 4px solid ${props => props.theme.colors.$styleColor};
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    ul {
      font-size: 18px;
      line-height: 25px;
      margin-left: auto;

      li:not(:last-child) {
        margin-right: 20px;
      }
    }
  }

  @media (min-width: 1360px) {
    ul > li:not(:last-child) {
      margin-right: 43px;
    }
  } ;
`;
