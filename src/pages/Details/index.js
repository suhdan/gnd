import { h } from "preact";
import { IoLocationOutline } from "react-icons/io5";
import { TbShirt } from "react-icons/tb";
import { BiTimeFive, BiLandscape } from "react-icons/bi";
import * as Styled from "./styled";

const Details = ({ isActive, isMobile }) => {
  return (
    <Styled.Details isMobile={isMobile} isActive={isActive}>
      <Styled.DetailContainer>
        <Styled.Detail>
          <BiTimeFive />
          <p>saturday, 9/24/2022, 4pm</p>
          <Styled.Link
            onClick={() =>
              window.open(
                "https://calendar.google.com/event?action=TEMPLATE&tmeid=MG5lZzVrZDF0ZzBvdWVtOWwxaDFldjdmNnMgZ3JhY2UuYWxzby5kYW5AbQ&tmsrc=grace.also.dan%40gmail.com"
              )
            }
          />
        </Styled.Detail>
        <Styled.Detail>
          <IoLocationOutline />
          <p>the farm at glenwood mountain</p>
          <Styled.Link
            onClick={() => window.open("https://goo.gl/maps/Skwdmm8AixxLc6qdA")}
          />
        </Styled.Detail>
        <Styled.Detail>
          <BiLandscape />
          half outdoor, half indoor
        </Styled.Detail>
        <Styled.Detail>
          <TbShirt />
          cocktail attire
        </Styled.Detail>
      </Styled.DetailContainer>
    </Styled.Details>
  );
};

export default Details;
