import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" }
  }
};
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <motion.Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </motion.Button>
      </div>
    </div>
  );
}

export default HeroSection;
