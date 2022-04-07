import styled, { keyframes } from "styled-components";
import selfie from "./assets/selfie-bg.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-25px);
  }
  to {
    opacity: 0.95;
    transform: translateX(0px);
  }
`;

export const Base = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 1.4rem;
  width: 100%;
  height: 100%;
  line-height: 1.2;

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const Home = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${selfie});
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    background-size: contain;
  }
`;

export const SaveDate = styled.div`
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  padding-left: 20%;
  border-radius: 5px;

  @media (max-width: 1200px) {
    margin-top: -10%;
  }

  @media (max-width: 900px) {
    background: white;
    padding: 1rem;
    margin-left: 1.5rem;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;

  a {
    color: black !important;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.5;
    }
  }

  > * {
    margin-right: 0.5rem;
  }
`;

export const DelayMsg = styled.p`
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`;
