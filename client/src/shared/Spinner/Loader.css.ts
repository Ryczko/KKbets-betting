import styled, { keyframes } from 'styled-components';
import ball from 'assets/images/ball.svg';

const roll = keyframes`
    0% {
    }
    100% {
      transform: rotate(360deg);
    }
  
`;
const bounce = keyframes`
    0% {
    }
    50% {
      transform: translateY(60px);
    }
    100% {
    }
`;
const shadowScale = keyframes`
0% {
    }
    50% {
      transform: scaleX(1);
      opacity: 0.8;
    }
    100% {
    }
`;

export const StyledLoader = styled.div`
    margin: 0 auto;
    width: 40px;
    height: 100px;

    position: relative;

    .shadow {
        position: absolute;
        width: 100%;
        height: 10px;
        background-color: grey;
        bottom: 0;
        border-radius: 100%;
        transform: scaleX(0.8);
        opacity: 0.6;
        animation: ${shadowScale} 1s linear infinite;
    }

    .gravity {
        width: 40px;
        height: 40px;
        animation: ${bounce} 1s cubic-bezier(0.68, 0.35, 0.29, 0.54) infinite;
    }
    .ball {
        width: 40px;
        height: 40px;
        background-image: url(${ball});
        background-size: cover;
        animation: ${roll} 1s linear infinite;

        background-color: white;
        border-radius: 50%;
    }
`;
