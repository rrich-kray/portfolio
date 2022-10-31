import { useState, useEffect } from "react";
import "./ProjectPage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactPlayer from "react-player";
import iconMappings from "../Projects/iconsMappings.js";

const ProjectPage = ({ projectData, setActivePost }) => {
  console.log(projectData);
  return (
    <div className="project-page">
      <div className="arrow-back-icon" onClick={() => setActivePost([])}>
        <ArrowBackIcon style={{ width: "100%" }} />
      </div>
      <div className="header">
        <div className="header-left-panel header-panel">
          <h1>{projectData.name}</h1>
        </div>
        {/* <div className="header-right-panel header-panel">
          <p>{projectData.summary}</p>
        </div> */}
      </div>
      <div className="vid-container">
        {projectData.video === "" ? (
          <div
            className="wallpaper-container"
            style={{
              backgroundImage: `url('${projectData.backgroundImage}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        ) : (
          <div className="iframe-wrapper">
            <iframe src={projectData.video} allow="autoplay"></iframe>
          </div>
        )}
      </div>
      <div className="body-container">
        <div className="description-container info-container">
          <div className="description-header project-header">
            <h1>About</h1>
          </div>
          <div className="description">
            <p style={{ marginBottom: "20px" }}>
              {projectData.info.description}
            </p>
            <div className="project-link-container">
              <a
                href={projectData.ghRepository}
                style={{ marginBottom: "20px" }}
              >
                GitHub Repository
              </a>
              {projectData.deploymentLink && (
                <a
                  href={projectData.deploymentLink}
                  style={{ marginBottom: "20px" }}
                >
                  Production Version
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="technologies-container info-container">
          <div className="technologies-header project-header">
            <h1>Technologies</h1>
          </div>
          <div className="technologies">
            {projectData.info.technologies.map((technology) => (
              <div className="icon-container">
                <img
                  className="technology-icon"
                  src={
                    iconMappings[
                      technology.match(/(Apollo)/g)
                        ? technology.split(" ").join("")
                        : technology
                    ]
                  }
                ></img>
                <span className="technology-label">{technology}</span>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="gallery-container info-container">
          <div className="gallery-header project-header">
            <h1>Screenshots</h1>
          </div>
          <div className="gallery">
            {projectData.info.gallery.map((image) => (
              <div className="image-container">
                <img src={image} className="image" />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectPage;
