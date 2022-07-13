import styled from "styled-components";
import { Link } from "preact-router";

export const NavLinks = styled.div`
  z-index: 50;
  position: absolute;
  bottom: 20%;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.5s;

  @media (min-width: 900px) {
    top: 1rem;
    bottom: initial;
    color: ${({ color }) => color};
  }
`;

export const NavLink = styled(Link)`
  margin-right: 1.375rem;
  cursor: pointer;
  font-size: 2rem;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  transition: background 0.2s;
  background: ${({ isActive }) =>
    isActive ? "rgb(175 174 174 / 54%)" : "transparent"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    background: rgb(175 174 174 / 54%);
  }
`;

export const LinkText = styled.div`
  font-size: 1.4rem;
`;
