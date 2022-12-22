import React from "react";
import "./Tile.css";

const Tile = ({ projectData, setActivePost }) => {
  console.log(projectData);
  return (
    <div
      className="tile"
      style={{
        backgroundImage: `url('${projectData.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      onClick={() => setActivePost(projectData)}
    >
      <div className="tile-overlay">
        <h1 style={{ textAlign: "center" }}>{projectData.name}</h1>
        <p>{projectData.summary}</p>
        {/* <a href={projectData.ghRepository}>GitHub</a>
        {projectData.deploymentLink && (
          <a href={projectData.deploymentLink}>Deployed</a>
        )} */}
      </div>
    </div>
  );
};

export default Tile;
