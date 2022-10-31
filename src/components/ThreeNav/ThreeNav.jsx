import React, { useState, useEffect } from "react";
import "./ThreeNav.css";

function ThreeNav({ activePage, changeActivePage }) {
  return (
    <div className="three-nav">
      <div className="three-nav-links">
        {/* <button
          className="three-nav-button"
          onClick={() => changeActivePage("home")}
        >
          Home
        </button>
        <button
          className="three-nav-button"
          onClick={() => changeActivePage("projects")}
        >
          Projects
        </button>
        <button
          className="three-nav-button"
          onClick={() => changeActivePage("about")}
        >
          About
        </button> */}
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about-redux">About</a>
      </div>
    </div>
  );
}

export default ThreeNav;
