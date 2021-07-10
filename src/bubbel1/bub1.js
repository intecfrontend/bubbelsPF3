import dries from "./picts/dries.jpg";
import styled from "styled-components";
import BookmanOldStyle from "./Bookman/BookmanOldStylBoldItalic.ttf";

const Roundpic = styled.img`
  background: transparent;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  width: 50px;
  height: 50px;

  margin-bottom: -55px;
  z-index: 1;
`;
const Overlay = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background: rgba(0, 119, 255, 0.3);
  transition: 0.5s ease;
  z-index: 10;
  position: absolute;
`;
const PicWrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  transition: 0.5s ease;
  margin-bottom: -20px;
`;
const Textwrapper = styled.div`
  margin-top: 30px;
  width: 90%;
  height: 40%;
  text-align: center;
  color: white;
`;
const Small = styled.div`
  margin-top: 1em;
  height: 40%;
  font-size: 12px;
  font-weight: 900;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;
const BKman = styled.div`
  font-family: BookmanOS;
  font-size: 15px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.52);
  @font-face {
    font-family: BookmanOS;
    font-style: italic;

    font-weight: 900;
    src: url(${BookmanOldStyle});
  }
`;
const BodyWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(191, 255, 250, 0.3);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: orange;
    transition: 0.6s;
  }
`;

const Body = styled.body``;

function ref1() {
  return (
    <Body>
      <a href="https://www.linkedin.com/in/driesallaert/" target="_blank">
        <BodyWrapper>
          <PicWrapper>
            <Overlay />
            <Roundpic src={dries} alt="driespict" />
          </PicWrapper>
          <Textwrapper>
            <BKman>
              "Benedikt is <br />a damn good
              <br />
              designer!"
            </BKman>
            <Small>Dries</Small>
          </Textwrapper>
        </BodyWrapper>
      </a>
    </Body>
  );
}
export default ref1;
