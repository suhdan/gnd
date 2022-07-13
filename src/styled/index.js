import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 0.4s;
  opacity: 0;
  pointer-events: none;
  z-index: 1;

  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 1;
          pointer-events: initial;
        `
      : ""}
`;
