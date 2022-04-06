import { h } from "preact";
import "./reset.css";
import * as Styled from "./styled";

const Home = () => {
  console.log(`hi! dan here. whatcha lookin for?`);
  return (
    <Styled.Base>
      <Styled.Home>
        <Styled.SaveDate>
          <p>saturday, 9/24/2022</p>
          <br />
          <p>the farm at glenwood mountain</p>
          <p>1801 country road 565</p>
          <p>sussex, nj 07641</p>
          <br />
          <Styled.Links>
            <a target="_blank" href="https://goo.gl/maps/Skwdmm8AixxLc6qdA">
              maps
            </a>
            <p> | </p>
            <a
              target="_blank"
              href="https://calendar.google.com/calendar/u/0/r/eventedit/copy/MmpkcHR0NGdqNGFncW1nczZzcmdoMGVtb2YgZ3JhY2UuYWxzby5kYW5AbQ/ZGFuc3VoMzU5M0BnbWFpbC5jb20?sf=true"
            >
              gcal
            </a>
          </Styled.Links>
          <br />
          <p>more to come ;)</p>
        </Styled.SaveDate>
      </Styled.Home>
    </Styled.Base>
  );
};

export default Home;
