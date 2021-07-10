import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-120vw"
  },
  hidden0: {
    x: "-100vw",
    width: "100vw",
    padding: "0vw 25vw"
  },
  hidden1: {
    opacity: 0,
    x: "-120vw"
  },
  visible0: {
    x: 0,
    width: "150vw",
    transition: { type: "spring", delay: 0 }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.25 }
  },
  visible1: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 }
  },
  visible2: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.75 }
  },
  visible3: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 1 }
  },
  exit: {
    x: "-1000vh",
    transition: { ease: "easeInOut" }
  }
};
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const rolls = () => {
    if (setClick(true)) {
      setButton(false);
    } else {
    }
  };
  //what does useEffect do?
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
            {/* hamburger verandert in X */}
          </div>
          {console.log("click" + click)},
          {click === true && (
            <>
              {console.log("1st click" + click)}
              <motion.ul
                className={click ? "nav-menu active" : "nav-menu"}
                variants={containerVariants}
                initial="hidden3"
                animate="visible3"
                exit="exit"
              >
                <li className="nav-item">
                  <motion.Link
                    to="/"
                    className="nav-links"
                    onClick={closeMobileMenu}
                    variants={containerVariants}
                    initial="hidden2"
                    animate="visible2"
                    exit="exit"
                  >
                    Home
                  </motion.Link>
                </li>
                <li className="nav-item">
                  <motion.Link
                    to="/services"
                    className="nav-links"
                    onClick={closeMobileMenu}
                    variants={containerVariants}
                    initial="hidden1"
                    animate="visible1"
                    exit="exit"
                  >
                    Services
                  </motion.Link>
                </li>
                <li className="nav-item">
                  <motion.Link
                    to="/products"
                    className="nav-links"
                    onClick={closeMobileMenu}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    Products
                  </motion.Link>
                </li>
                <li>
                  <motion.Link
                    to="/sign-up"
                    className="nav-links-mobile"
                    onClick={closeMobileMenu}
                    variants={containerVariants}
                    initial="hidden0"
                    animate="visible0"
                    exit="exit"
                  >
                    <div className="signupWrapper">Sign Up</div>
                  </motion.Link>
                </li>
              </motion.ul>
              {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}{" "}
            </>
          )}
          {click === false && (
            <>
              {console.log("2nd click" + click)}
              <motion.ul
                className={click ? "nav-menu active" : "nav-menu"}
                variants={containerVariants}
                initial="visible0"
                animate="hidden0"
                exit="exit"
              >
                <li className="nav-item">
                  <motion.Link
                    to="/"
                    className="nav-links"
                    onClick={closeMobileMenu}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    Home
                  </motion.Link>
                </li>
                <li className="nav-item">
                  <motion.Link
                    to="/services"
                    className="nav-links"
                    onClick={closeMobileMenu}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible1"
                    exit="exit"
                  >
                    Services
                  </motion.Link>
                </li>
                <li className="nav-item">
                  <motion.Link
                    to="/products"
                    className="nav-links"
                    onClick={closeMobileMenu}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible2"
                    exit="exit"
                  >
                    Products
                  </motion.Link>
                </li>
                <li>
                  <motion.Link
                    to="/sign-up"
                    className="nav-links-mobile"
                    onClick={closeMobileMenu}
                    variants={containerVariants}
                    initial="hidden1"
                    animate="visible2"
                    exit="exit"
                  >
                    <div className="signupWrapper">Sign Up</div>
                  </motion.Link>
                </li>
              </motion.ul>
              {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}{" "}
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
