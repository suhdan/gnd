import styled from "styled-components";
import selfie from "./assets/selfie-bg.jpg";

export const Base = styled.div`
  font-family: "Libre Baskerville", serif;
  width: 100%;
  height: 100%;
  line-height: 1.2;
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

  > * {
    margin-right: 0.5rem;
  }
`;
