import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import dance from "~/assets/dance.mp4";
import * as Styled from "./styled";

const Rsvp = ({ isMobile, isActive }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let is16x9 = false;
  if (windowSize.width && windowSize.height) {
    is16x9 = windowSize.width / windowSize.height > 1.778;
  }

  return (
    <Styled.Rsvp isActive={isActive}>
      <div style={{ display: isMobile ? "none" : "block" }}>
        <video
          style={{
            width: is16x9 ? "100%" : "initial",
            height: is16x9 ? "initial" : "100%",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
          autoplay
          loop
          muted
        >
          <source src={dance} type="video/mp4" />
        </video>
      </div>

      <Styled.Form
        src="https://docs.google.com/forms/d/e/1FAIpQLSc-_WoSkEiCBSUJA90U2sfaD_c5esxPOWCOYbe6nT6d7lI4-A/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </Styled.Form>
    </Styled.Rsvp>
  );
};

export default Rsvp;
