import styled from "styled-components";
import selfie from "./assets/selfie-bg.jpg";

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
  padding-left: 20%;

  @media (max-width: 900px) {
    background: white;
    opacity: 0.95;
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
