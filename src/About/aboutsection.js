import * as React from "react";
import klas from "./IMGabout/class.jpg";
import card from "./IMGabout/letmeseebc.jpg";
import styled from "styled-components";
import "aos/dist/aos.css";

const Aboutsectiontag = styled.div`
  font-family: "roboto";
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-width: 700px;
  background: linear-gradient(0deg, #f16603 0%, #fbb402 100%);
`;
const Abouttitle = styled.div`
  color: white;
  width: 27vw;
  text-align: right;
  font-size: calc(10px + 5vw);
  letter-spacing: -2px;
  font-weight: 900;
  line-height: 1.2;
  z-index: 10;
  margin: 0vw 3vw 3vw 9vw;
  @media (max-width: 1000px) {
    margin-left: 11vw;
  }
`;

const Abouttext = styled.div`
  color: white;
  line-height: 3;
  width: auto;
  z-index: 30;
  font-size: calc(7px + 1vw);
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 70vw;
    padding: 0vw 5vw 0vw 5vw;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: 60vw;
    margin: 0vw 5vw 0vw 0vw;
    padding: 0vw;
  }
`;
const Aboutcontainer = styled.div`
  display: flex;
  width: 79vw;
  height: auto;
  justify-content: center;
  /* border: red solid 5px; */
  padding: 10vh 10vh 0vh 10vh;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Aboutimg = styled.img`
  height: auto;
  width: 50vw !important;
  justify-content: center;
  border: 4px solid white;
  margin: 0 auto;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 3px 2px;
  @media (max-width: 1000px) {
    width: 70vw !important;
  }
`;
const Bcard = styled.img`
  height: auto;
  position: absolute;
  transform: rotate(-10deg);
  width: 20vw !important;
  left: 73vw;
  top: 45vh;
  border: 1px solid white;
  margin: 0 auto;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 3px 2px;
  @media (max-width: 1000px) {
    width: 25vw !important;  top: 55vh;

  }
`;

function Aboutsection() {
  return (
    <Aboutsectiontag>
      <Aboutcontainer>
        <Abouttitle>
          Making <br />
          iT <br />
          happen
        </Abouttitle>
        <Abouttext>
          I have been a graphic designer since 1989, went back to school and
          learned how to code.
          <br />
          Since July 2019 I am a REACT instructor at Intec Brussels. Teaching
          complex code as simple as possible made me an appreciated
          job-generator for my students.
        </Abouttext>
      </Aboutcontainer>

      <Aboutimg src={klas} alt="beneklas" />
      <Bcard src={card} alt="card" />
    </Aboutsectiontag>
  );
}

export default Aboutsection;
