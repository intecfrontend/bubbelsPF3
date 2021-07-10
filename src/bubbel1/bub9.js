import charles from "./picts/charles.jpg";
import styled from "styled-components";
import BookmanOldStyle from "./Bookman/BookmanOldStylBoldItalic.ttf";

const Roundpic = styled.img`
  background: transparent;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  width: 50px;
  height: 50px;
  z-index: 1;
`;

const Textwrapper = styled.div`
  width: 90%;
  height: 40%;
  text-align: center;
  color: white;
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
  width: 170px;
  height: 170px;
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

function ref9() {
  return (
    <Body>
      <a href="https://www.linkedin.com/in/charles-hilaire-1374b4b1/">
        <BodyWrapper>
          <Textwrapper>
            <BKman>
              "Click on
              <br />
              the bubbles
              <br />
              for contact-details."
            </BKman>
          </Textwrapper>
        </BodyWrapper>
      </a>
    </Body>
  );
}
export default ref9;
