import styled from "styled-components";
import { PageContainer } from "../../styled/";

export const Rsvp = styled(PageContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Form = styled.iframe`
  z-index: 1;
  width: calc(100% - 2rem);
  background: white;
  margin-top: 1rem;
  height: 65%;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 2px 7px 14px 6px;

  @media (min-width: 900px) {
    margin-top: 6rem;
    width: 450px;
    border-radius: 10%;
    border: 12px solid #ff5722;
  }
`;
