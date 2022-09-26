import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  padding-top: 72px;
  padding-bottom: 50px;
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
    padding-top: 50px;
    padding-bottom: 40px;

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
    padding-top: 80px;
    padding-bottom: 88px;
    h2 {
      line-height: 48px;
    }
  }
`;

export const P = styled.p`
  margin-bottom: 16px;
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: -17px;
    margin-left: -17px;
  }
`;
export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 17px;
    margin-left: 17px;
    flex-basis: calc(100% / 3 - 17px);
  }
`;

export const WrapperImg = styled.div`
  position: relative;

  transition: scale 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    scale: 1.02;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;

  ${WrapperImg}:hover & {
    opacity: 1;
  }

  a {
    color: white;
    :hover {
      opacity: 0.8;
    }
  }

  a:not(:last-child) {
    margin-right: 25px;
  }
`;

export const WrapperText = styled.div`
  padding-top: 16px;

  h3 {
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 32px;
      line-height: 32px;
    }
  }
`;
