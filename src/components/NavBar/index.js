import { h } from "preact";
import { BsHouse, BsInfoCircle } from "react-icons/bs";
import { GoGift } from "react-icons/go";

import { PATHS } from "../../constants";
import * as S from "./styled";

const NavBar = ({ currentPath, color }) => {
  const checkPath = (pathName) => PATHS[pathName].includes(currentPath);
  return (
    <S.NavLinks color={color}>
      <S.NavLink isActive={checkPath("HOME")} href={PATHS.HOME[0]}>
        <BsHouse />
      </S.NavLink>
      <S.NavLink isActive={checkPath("DETAILS")} href={PATHS.DETAILS[0]}>
        <BsInfoCircle />
      </S.NavLink>
      <S.NavLink isActive={checkPath("REGISTRY")} href={PATHS.REGISTRY[0]}>
        <GoGift />
      </S.NavLink>
      <S.NavLink isActive={checkPath("RSVP")} href={PATHS.RSVP[0]}>
        <S.RsvpContainer>
          <S.RsvpLetter>R</S.RsvpLetter>
          <S.RsvpLetter>S</S.RsvpLetter>
          <S.RsvpLetter>V</S.RsvpLetter>
          <S.RsvpLetter>P</S.RsvpLetter>
        </S.RsvpContainer>
      </S.NavLink>
    </S.NavLinks>
  );
};

export default NavBar;
