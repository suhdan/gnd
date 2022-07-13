import styled, { css } from "styled-components";
import { PageContainer } from "../../styled/";
import selfie from "~/assets/selfie-bg.jpg";

export const Home = styled(PageContainer)`
  ${({ isMobile }) =>
    !isMobile &&
    css`
      background-image: url(${selfie});
      background-position: initial;
    `}
`;

export const WelcomeContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  padding: 0 1rem;

  @media (min-width: 700px) {
    font-size: 1.5rem;
    padding: 0 2rem;
  }

  @media (min-width: 900px) {
    top: 30%;
    left: 14%;
    right: initial;
    padding: 0 1rem;
  }
`;

export const WelcomeLine = styled.div`
  margin-bottom: 0.2rem;
  font-size: 1.5rem;

  @media (min-width: 700px) {
    font-size: 1.5rem;
  }

  @media (min-width: 900px) {
    margin-bottom: 0.4rem;
    font-size: 1.7rem;
  }
`;

export const WelcomeHashtag = styled(WelcomeLine)`
  font-size: 3rem;

  @media (min-width: 700px) {
    font-size: 4.5rem;
  }

  @media (min-width: 900px) {
    font-size: 4.2rem;
  }
`;

export const WelcomeCloser = styled(WelcomeLine)`
  @media (min-width: 900px) {
    text-align: right;
    padding-right: 2rem;
  }
`;
