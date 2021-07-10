import Ref1 from "./bubbel1/bub1";
import Ref2 from "./bubbel1/bub2";
import Ref3 from "./bubbel1/bub3";
import Ref4 from "./bubbel1/bub4";
import Ref5 from "./bubbel1/bub5";
import Ref6 from "./bubbel1/bub6";
import Ref7 from "./bubbel1/bub7";
import Ref8 from "./bubbel1/bub8";
import Ref9 from "./bubbel1/bub9";
import Ref10 from "./bubbel1/bub10";
import "./Bubb2.css";
import styled from "styled-components";
const Wrapper = styled.div`
  background: none;
  position: absolute;
  top: 00%;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 80px 0;
  height: 400px;
  text-align: center;
`;

const BGbubbels = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

const BGli = styled.li`
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  bottom: -160px;
  -webkit-animation: round 20s infinite;
  animation: round 20s infinite;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
`;
function Bcol() {
  return (
    <div id="AppId" className="App">
      <header className="App-header">
        <Wrapper>
          <BGbubbels>
            <BGli>
              <Ref1 />
            </BGli>
            <BGli>
              <Ref2 />
            </BGli>
            <BGli>
              <Ref3 />
            </BGli>
            <BGli>
              <Ref4 />
            </BGli>
            <BGli>
              <Ref5 />
            </BGli>
            <BGli>
              <Ref6 />
            </BGli>
            <BGli>
              <Ref7 />
            </BGli>
            <BGli>
              <Ref8 />
            </BGli>
            <BGli>
              <Ref9 />
            </BGli>
            <BGli>
              <Ref10 />
            </BGli>
          </BGbubbels>
        </Wrapper>
      </header>
    </div>
  );
}

export default Bcol;
