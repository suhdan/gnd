import { h } from "preact";
import * as Styled from "./styled";

const Home = ({ isActive, isMobile }) => {
  return (
    <Styled.Home isMobile={isMobile} isActive={isActive}>
      <Styled.WelcomeContainer>
        <Styled.WelcomeLine>welcome to our</Styled.WelcomeLine>
        <Styled.WelcomeHashtag>#suhpectakular</Styled.WelcomeHashtag>
        <Styled.WelcomeCloser>wedding.</Styled.WelcomeCloser>
      </Styled.WelcomeContainer>
    </Styled.Home>
  );
};

export default Home;
