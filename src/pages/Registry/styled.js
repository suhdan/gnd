import styled, { css } from "styled-components";
import { PageContainer } from "../../styled/";
import pepper from "~/assets/pepper.jpg";

export const Registry = styled(PageContainer)`
  ${({ isMobile }) =>
    !isMobile &&
    css`
      background-image: url(${pepper});
      background-position: center;
      background-color: rgb(0 0 0 / 15%);
      background-blend-mode: multiply;
    `}
`;

export const ContentContainer = styled.div`
  position: absolute;
  left: 1rem;
  color: black;
  top: 15%;

  @media (min-width: 900px) {
    right: 11%;
    left: initial;
    color: white;
    top: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Message = styled.p`
  padding-bottom: 1.8rem;
  font-size: 2rem;

  @media (min-width: 700px) {
    padding-bottom: 2rem;
    font-size: 3rem;
  }

  @media (min-width: 900px) {
    padding-bottom: 1.5rem;
    font-size: 3rem;
  }
`;

export const RegistryLink = styled.a`
  background: rgb(4 72 21);
  border-radius: 5px;
  color: white;
  text-decoration: none;
  padding: 9px 19px;
  font-weight: bold;
  box-shadow: rgb(0 0 0 / 42%) 1px 2px 10px 1px;
  font-size: 1rem;
  filter: brightness(1);
  transition: filter 0.2s;

  :hover {
    filter: brightness(1.2);
  }

  @media (min-width: 700px) {
    font-size: 1.6rem;
  }

  @media (min-width: 900px) {
    background: rgb(27, 119, 246);
    font-size: 1.3rem;
    box-shadow: rgb(0 0 0 / 56%) 5px 2px 10px 2px;
  }
`;
