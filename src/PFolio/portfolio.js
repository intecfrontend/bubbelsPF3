import React, { useEffect, useState } from "react";
import "./PFolio.css";
import images from "./data";
import { SRLWrapper } from "simple-react-lightbox";
import styled from "styled-components";
import eye from "./eye.png";
import code from "./code.png";

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

const Eyebtn = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: #f16603;
  z-index: 100;
  text-align: center;
  color: #fff;
  margin: 25px 25px -25px 25px;
  width: 50px;
  height: 50px;
  transition: all ease-in-out 0.2s;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 3px 2px;
  &:hover {
    width: 55px;
    height: 55px;
    margin: 25px 22.5px -30px 22.5px;
    transition: all ease-in-out 0.2s;
  }
`;
const Eyetxt = styled.a`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 3px;
`;
const Eyeimg = styled.img`
  width: 30px;
  height: auto;
  margin: 0px 0px -10px 0px;
`;

const ImageCard = styled.div`
  position: relative;
  z-index: 100;
  margin: 1.5vw;
  border-radius: 5px;
  background: white;
  padding: 0px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 3px 2px;
`;
const Title = styled.div`
  font-weight: bold;
  margin-top: 5vw;
  display: inline;
  justify-content: center;
  text-align: center;
  /* color: #cec950; */
  color: #fff;
  font-size: calc(10px + 1vw);
  position: relative;
  width: 100%;
  text-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 3px 2px;
`;
const Softtitle = styled.div`
  color: #cec950;
  font-weight: bold;
  font-size: calc(5px + 0.5vw);
  display: inline;
  justify-content: center;
  text-align: center;
`;
const Softtext = styled.div`
  color: #fff;
  margin-top: 10px;
  font-weight: bold;
  font-size: calc(5px + 0.5vw);
  display: inline;
  justify-content: center;
  text-align: center;
`;
const Softdate = styled.div`
  color: #fff;
  font-size: calc(5px + 0.5vw);
  display: inline;
  margin-top: 10px;
  justify-content: center;
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-radius: 5px;
  right: 0;
  background: rgba(0, 172, 238, 0.9);
  background: linear-gradient(
    0deg,
    rgba(0, 126, 251, 0.9) 0%,
    rgba(0, 212, 250, 0.9) 100%
  );
  overflow: hidden;
  width: 100%;
  height: 0%;
  transition: 0.5s ease;
`;

const options = {};

function PFolio() {
  const [tag, setTag] = useState("Show all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "Show all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter(image => image.tag.includes(tag)));
  }, [tag]);

  return (
    <div className="PFbg">
      <div>        <TagButton
          name="React"
          tagActive={tag === "React" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="React-Native"
          tagActive={tag === "React-Native" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="Show all"
          tagActive={tag === "Show all" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="FireBase"
          tagActive={tag === "FireBase" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="Latest Job"
          tagActive={tag === "Latest Job" ? true : false}
          handleSetTag={setTag}
        />
        </div>
      <SRLWrapper options={options}>
        <div className="PFcontainer">
          {filteredImages.map(image => (
            <>
              <ImageCard key={image.id} className="imageCard">
                <img
                  className="image"
                  src={`/images/${image.imageName}`}
                  alt=""
                />{" "}
                <Overlay className="overlay">
                  {" "}
                  <div className="eyewrap">
                    <div className="eyewrapline">
                      <Eyebtn>
                        <Eyetxt
                          target="_blank"
                          rel="noopener"
                          href={`${image.seelink}`}
                        >
                          <Eyeimg src={eye} alt="eye" />
                          <div className="eyediv">App</div>
                        </Eyetxt>
                      </Eyebtn>
                      <Eyebtn id="eyecode">
                        <Eyetxt
                          target="_blank"
                          rel="noopener"
                          href={`${image.codelink}`}
                        >
                          <Eyeimg src={code} alt="eye" />
                          <div className="eyediv">Code</div>
                        </Eyetxt>
                      </Eyebtn>
                    </div>
                    <div className="eyewrapcol">
                      <Title>{image.title}</Title>
                      <Softtitle>{image.software}</Softtitle>
                      <Softtext>{image.description}</Softtext>
                      <Softdate>{image.date}</Softdate>
                    </div>
                  </div>
                </Overlay>
              </ImageCard>
            </>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default PFolio;
