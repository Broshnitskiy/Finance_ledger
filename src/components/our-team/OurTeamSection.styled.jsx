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

export const WrapperImg = styled.div`
  position: relative;

  transition: scale 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    scale: 1.03;
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
`;
