/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from "../styles/theme";

/**
 * Code from SpinKit (Chase)
 * MIT License
 * https://github.com/tobiasahlin/SpinKit
 */

const Container = styled.div`
  width: 1em;
  height: 1em;
  position: relative;
  animation: chase 2.5s infinite linear both;

  @keyframes chase {
    100% { transform: rotate(360deg); } 
  }
`;

const Dot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: chase-dot 2.0s infinite ease-in-out both;

  :before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: #fff;
    border-radius: 100%;
    animation: chase-dot-before 2.0s infinite ease-in-out both; 
  }

  :nth-child(1) { animation-delay: -1.1s; }
  :nth-child(2) { animation-delay: -1.0s; }
  :nth-child(3) { animation-delay: -0.9s; }
  :nth-child(4) { animation-delay: -0.8s; }
  :nth-child(5) { animation-delay: -0.7s; }
  :nth-child(6) { animation-delay: -0.6s; }
  :nth-child(1):before { animation-delay: -1.1s; }
  :nth-child(2):before { animation-delay: -1.0s; }
  :nth-child(3):before { animation-delay: -0.9s; }
  :nth-child(4):before { animation-delay: -0.8s; }
  :nth-child(5):before { animation-delay: -0.7s; }
  :nth-child(6):before { animation-delay: -0.6s; }

  @keyframes chase-dot {
    80%, 100% { transform: rotate(360deg); } 
  }

  @keyframes chase-dot-before {
    50% {
      transform: scale(0.4); 
    } 100%, 0% {
      transform: scale(1.0); 
    } 
  }
`;

/** `Spinner` component that is used for loading state visualizing. */
const Spinner: React.FC = () => {
  return (
    <Container>
      {[...Array(6)].map((_, idx) => <Dot key={idx}/>)}
    </Container>
  );
};

export default Spinner;
