import styled from 'styled-components';

export const Div = styled.div`
  ul {
    display: flex;
    justify-content: center;

    font-size: 16px;
    line-height: 22px;

    color: red;

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
    }
  }
`;

export const Header = styled.header``;
