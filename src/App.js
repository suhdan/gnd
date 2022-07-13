import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Router, { useRouter } from "preact-router";
import { createHashHistory } from "history";

import "./reset.css";
import storm from "~/assets/storm.mp4";
import { PATHS } from "./constants";
import * as Pages from "./pages";
import { getTextColor } from "./utils";
import { NavBar } from "./components";
import * as Styled from "./styled";

const Home = () => {
  const [ctx] = useRouter();
  const path = window?.location?.hash || "/";

  const [videoLoaded, setVideoLoaded] = useState(false);
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

  console.log(`whatcha lookin' for?`);

  const checkPath = (pathName) => PATHS[pathName].includes(path);

  const isMobile = windowSize.width < 900;

  return (
    <Styled.Base>
      <div style={{ display: isMobile ? "block" : "none" }}>
        <video
          style={{
            height: windowSize.width < 700 ? "100%" : "initial",
            width: windowSize.width >= 700 ? "100%" : "initial",
            zIndex: 1,
            position: "absolute",
            inset: 0,
          }}
          autoplay
          loop
          preload="auto"
          muted
          defaultMuted
          playsinline
          onPlay={() => {
            setVideoLoaded(true);
          }}
        >
          <source src={storm} type="video/mp4" />
        </video>
      </div>

      <div>
        <NavBar currentPath={path} color={getTextColor(path)} />

        <Router history={createHashHistory()}>
          <div style={{ width: "100%", height: "100%" }} default>
            {((isMobile && videoLoaded) || !isMobile) && (
              <div>
                <Pages.Home isMobile={isMobile} isActive={checkPath("HOME")} />
                <Pages.Details
                  isMobile={isMobile}
                  isActive={checkPath("DETAILS")}
                />
                <Pages.Registry
                  isMobile={isMobile}
                  isActive={checkPath("REGISTRY")}
                />
                <Pages.Rsvp isMobile={isMobile} isActive={checkPath("RSVP")} />
              </div>
            )}
          </div>
        </Router>
      </div>
    </Styled.Base>
  );
};

export default Home;
