import { h } from "preact";
import { BsHouse, BsInfoCircle, BsCardChecklist } from "react-icons/bs";
import { GoGift } from "react-icons/go";

import { PATHS } from "../../constants";
import * as Styled from "./styled";

const NavBar = ({ currentPath, color }) => {
  const checkPath = (pathName) => PATHS[pathName].includes(currentPath);
  return (
    <Styled.NavLinks color={color}>
      <Styled.NavLink isActive={checkPath("HOME")} href={PATHS.HOME[0]}>
        <BsHouse />
        <Styled.LinkText>home</Styled.LinkText>
      </Styled.NavLink>
      <Styled.NavLink isActive={checkPath("DETAILS")} href={PATHS.DETAILS[0]}>
        <BsInfoCircle />
        <Styled.LinkText>details</Styled.LinkText>
      </Styled.NavLink>
      <Styled.NavLink isActive={checkPath("REGISTRY")} href={PATHS.REGISTRY[0]}>
        <GoGift />
        <Styled.LinkText>registry</Styled.LinkText>
      </Styled.NavLink>
      <Styled.NavLink isActive={checkPath("RSVP")} href={PATHS.RSVP[0]}>
        <BsCardChecklist />
        <Styled.LinkText>rsvp</Styled.LinkText>
      </Styled.NavLink>
    </Styled.NavLinks>
  );
};

export default NavBar;
