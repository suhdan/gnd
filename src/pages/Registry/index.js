import { h } from "preact";
import * as Styled from "./styled";

const Registry = ({ isMobile, isActive }) => {
  return (
    <Styled.Registry isMobile={isMobile} isActive={isActive}>
      <Styled.ContentContainer>
        <Styled.Message>we love you :')</Styled.Message>
        <Styled.RegistryLink
          href="https://withjoy.com/daniel-and-grace-cl34g8pmv000o067xeb51onar/registry"
          target="_blank"
        >
          please buy us stuff
        </Styled.RegistryLink>
      </Styled.ContentContainer>
    </Styled.Registry>
  );
};

export default Registry;
