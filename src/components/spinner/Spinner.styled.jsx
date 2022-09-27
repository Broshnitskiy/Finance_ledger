import styled from 'styled-components';

export const Logo = styled.img`
  height: 20vmin;
  pointer-events: none;
  position: fixed;
  top: 40%;
  left: 43%;
  z-index: 101;
  animation: logo-spin infinite 3s linear;
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
