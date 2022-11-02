import React, { useEffect, useState } from "react";
import "./Projects.css";
import data from "./data";
import Tile from "../Tile/Tile";
  
const Projects = ({ setActivePost }) => {
  const [offset, setOffset] = useState(0);
  return (
    <div id="projects">
      <div id="projects-header">
        <h1>Projects</h1>
      </div>
      <div id="projects-container-right">
        {data.map((project, i) => (
          <div className="tile-wrapper" style={{ "--i": i }}>
            <Tile projectData={project} setActivePost={setActivePost} />
          </div>
        ))}
      </div>
    </div>
  );
};

// 090258

export default Projects;
