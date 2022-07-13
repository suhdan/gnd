import styled, { css } from "styled-components";
import { HiOutlineExternalLink } from "react-icons/hi";

import { PageContainer } from "../../styled/";
import fancy from "~/assets/fancy.jpg";

export const Details = styled(PageContainer)`
  ${({ isMobile }) =>
    !isMobile &&
    css`
      background-image: url(${fancy});
    `}
`;

export const DetailContainer = styled.div`
  position: absolute;
  top: 12%;
  left: 1rem;
  color: #000;

  @media (min-width: 700px) {
    left: 2rem;
  }

  @media (min-width: 900px) {
    color: #fff;
    top: 30%;
    left: 10%;
  }
`;

export const Detail = styled.div`
  margin-bottom: 1rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;

  > * {
    margin-right: 8px;
  }

  @media (min-width: 700px) {
    font-size: 2rem;
  }

  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const Link = styled(HiOutlineExternalLink)`
  filter: drop-shadow(0px 0px 0px black);
  transition: filter 0.2s;
  cursor: pointer;

  :hover {
    filter: drop-shadow(5px 2px 3px black);
  }
`;
