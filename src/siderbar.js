import React, { useState } from "react";
import "./exceptionalstyles.css";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Hamburger = styled.div`
  position: absolute;
  cursor: pointer;
  justify-content: start;
  align-items: center;
  display: flex;
  width: 120px;
  height: 40px;
  margin: -7px 0px 0px 25px;
  border-radius: 4px;
  background: rgb(1, 134, 203);
  transform: translate() (-50%, -5%);
  z-index: 20;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const Hamwrap = styled.div`
  position: relative;
  height: 100px;
  z-index: 930;
`;
const Nav = styled.div`
  position: relative;
`;
const Line = styled.div`
  background: white;
  width: 30px;
  height: 4px;
  border-radius: 8px;
  margin: 5px 15px 5px 15px;
`;

const TextMenu = styled.div`
  font-family: "roboto";
  color: white;
`;

const SidebarLink = styled.a`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: color 0.6s ease-in-out;
  transition: font-weight 0.6s ease-in-out;
  transition: 0.6s ease-in-out;

  &:hover {
    color: #e31837;
    font-weight: bold;
    transform: scale(1.3);

    transition: color 0.6s ease-in-out;
    transition: font-weight 0.6s ease-in-out;
    transition: 0.6s ease-in-out;
  }
`;
const CloseIcon = styled(FaTimes)`
  color: #fff;
  transition: 0.6s ease-in-out;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  &:hover {
    transform: scale(1.3);
    color: #e31837;
    transition: 0.6s ease-in-out;
  }
`;
const SidebarContainer = styled.div`
  position: fixed;
  z-index: 899;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.5);
  display: grid;
  align-items: center;
  top: 0;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: 0.3s ease-in-out;
  /* right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")}; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 10px 20px 0px,
    rgba(60, 64, 67, 0.15) 0px 20px 30px 2px;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  display: flex;
  width: 60px;
`;
const SidebarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e31837;
  padding: 16px 64px;
  border: none;
  cursor: pointer;
  transition: 0.6s ease-in-out;
  &:hover {
    transition: 0.6s ease-in-out;
    background: #fff;
  }
`;
function Siderbar() {
  const [Open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!Open);
    console.log("before click" + Open);
  };
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  function toggleClass() {
    navLinks.classList.toggle("Open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  }

  return (
    <Nav>
      {Open ? (
        <Hamwrap>
          <Hamburger onClick={handleToggle} class="hamburger">
            <div>
              <Icon onClick={handleToggle}>
                <CloseIcon />
              </Icon>
            </div>
            <TextMenu>Close</TextMenu>
          </Hamburger>
        </Hamwrap>
      ) : (
        <Hamwrap>
          <Hamburger onClick={handleToggle} class="hamburger">
            <div>
              <Line></Line>
              <Line></Line>
              <Line></Line>
            </div>
            <TextMenu>Menu</TextMenu>
          </Hamburger>
        </Hamwrap>
      )}

      <SidebarContainer className={Open ? "openSidebar" : "closedSidebar"}>
        {console.log("after click" + Open)}

        <SidebarLink
          className={Open ? "openSidelink1" : "closedSidelink1"}
          href="#home"
        >
          Home
        </SidebarLink>
        <SidebarLink
          className={Open ? "openSidelink2" : "closedSidelink2"}
          href="#about"
        >
          About Me
        </SidebarLink>
        <SidebarLink
          className={Open ? "openSidelink3" : "closedSidelink3"}
          href="#doublelong"
        >
          Projects
        </SidebarLink>
        <SidebarWrapper
          className={Open ? "openSidebarWrap" : "closeSidebarWrap"}
        >
          <SidebarLink id="contactwhite" href="#contact">
            Contact
          </SidebarLink>
        </SidebarWrapper>
      </SidebarContainer>
    </Nav>
  );
}

export default Siderbar;
