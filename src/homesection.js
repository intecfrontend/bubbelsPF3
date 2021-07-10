import React from "react";
import beneface from "./IMG/beneface.jpg";
import dwl from "./IMG/download.svg";
import styled from "styled-components";
import "./button.css";
import Bcol from "./bubbelscollector.js";

const Homesection = styled.div`
  font-family: "roboto";
  display: flex;
  height: 100vh;
  width: 100vw;
  min-height: 500px;
  min-width: 500px;
  min-width: 700px;
  background: rgb(0, 172, 238);
  background: linear-gradient(
    0deg,
    rgba(0, 126, 251, 1) 0%,
    rgba(0, 212, 250, 1) 100%
  );
`;
const Homewrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Hometitle = styled.div`
  z-index: 1;
  justify-content: center;
  flex-direction: column;
  margin-right: -50vw;
  margin-left: 20vw;
  width: 80vw;
  font-size: calc(40px + 3vw);
  letter-spacing: -2px;
  text-align: left;
  font-weight: 900;
  color: white;
`;
const Dwl = styled.img`
  margin-right: 6px;
  width: 13px;
  height: auto;
`;
const Homeimage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  min-width: calc(200px + 20vw);
  width: calc(200px + 20vw);
  height: calc(200px + 20vw);
  margin-top: -18px;
  margin-right: -18px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 3px 2px;
`;
const Homecontainer = styled.div`
  top: 0px;
  height: auto;
  width: 50vw;
  display: flex;
  justify-content: flex-end;
`;
function homesection() {
  return (
    <Homesection>
      {" "}
      <Bcol />
      <Homewrapper>
        <Hometitle>
          Looking <br />
          for a <br />
          React <br />
          Developer?
          <div>
            <button className="custom-btn btn-12">
              <span>3 CV's FR-NL-EN</span>

              <span>
                <Dwl src={dwl} alt="" />
                Download CV
              </span>
            </button>
          </div>
        </Hometitle>
      </Homewrapper>
      <Homecontainer>
        <Homeimage src={beneface} alt="beneface" />
      </Homecontainer>
    </Homesection>
  );
}

export default homesection;
