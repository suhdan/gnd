import styled from "styled-components";

export const Base = styled.div`
  position: relative;
  overflow: hidden;
  font-family: "Nunito", sans-serif;
  font-size: 1.4rem;
  width: 100%;
  height: 100%;
  line-height: 1.2;

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;
