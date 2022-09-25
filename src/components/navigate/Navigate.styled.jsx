import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
`;

export const Div = styled.div`
  ul {
    display: flex;
    justify-content: center;

    font-size: 16px;
    line-height: 22px;

    color: ${props => props.theme.colors.$white};

    li:not(:last-child) {
      margin-right: 12px;
    }

    li :hover {
      border-bottom: 2px solid ${props => props.theme.colors.$styleColor};
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
