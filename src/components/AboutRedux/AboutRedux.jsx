import { useState, useEffect } from "react";
import "./AboutRedux.css";

const AboutRedux = () => {
  const skills = [
    { skill: "React", logo: "https://www.svgrepo.com/show/354259/react.svg" },
    { skill: "HTML5", logo: "https://www.svgrepo.com/show/61215/html5.svg" },
    {
      skill: "CSS3",
      logo: "https://www.svgrepo.com/show/303263/css3-logo.svg",
    },
    {
      skill: "JavaScript",
      logo: "https://www.svgrepo.com/show/353925/javascript.svg",
    },
    {
      skill: "GraphQL",
      logo: "https://www.svgrepo.com/show/353834/graphql.svg",
    },
    {
      skill: "Sequelize",
      logo: "https://www.svgrepo.com/show/354333/sequelize.svg",
    },
    {
      skill: "SQL",
      logo: "https://www.svgrepo.com/show/255832/sql.svg",
    },
    {
      skill: "MySQL",
      logo: "https://www.svgrepo.com/show/354099/mysql.svg",
    },
    {
      skill: "MongoDB",
      logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    // {
    //   skill: "Mongoose",
    //   logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
    // },
    // {
    //   skill: "Node",
    //   logo: "https://www.svgrepo.com/show/355140/node.svg",
    // },
    {
      skill: "JQuery",
      logo: "https://www.svgrepo.com/show/303392/jquery-1-logo.svg",
    },
  ];

  return (
    <div id="about-redux">
      <div className="about-redux-left-panel">
        <h1>About</h1>
      </div>
      <div className="about-redux-right-panel">
        <div className="bio-container text-container">
          <h1 style={{ color: "White" }}>Bio</h1>
          <p style={{ color: "white" }}>
            My name is Ryan, and I am a recent graduate of the Case Western
            Reserve Full Stack Web Development Bootcamp. My career began in
            equity research, where I produced research for institutional
            investor clients. Here, I frequently used Python to build and
            organize large proprietary datasets that often served as the bedrock
            for differentiated, revenue-generating research. More importantly,
            it helped me realize my passion for software development and
            motivated my departure from the industry nearly a year ago. 
            
            Since then, I have worked in data conversions, where I was 
            responsible for developing C# applications that facilitated 
            the conversion of massive client datasets between systems.
            My contributions included creating reusable components for an 
            in-house data conversion framework and writing complex SQL queries 
            to validate conversion output. In my free time, I have built dozens 
            of projects leveraging many different technologies, and I am 
            driven forward by the prospect of developing unique solutions to unique problems.
          </p>
        </div>
        <div
          className="skills-container text-container"
          style={{ marginTop: "50px" }}
        >
          <h1>Skills</h1>
          <div className="skills-container">
            {skills.map((skill) => (
              <img src={skill.logo} />
            ))}
          </div>
        </div>
        <div
          className="contact-container text-container"
          style={{ marginTop: "50px" }}
        >
          <h1>Contact</h1>
          <div className="link-container">
            <a href="https://github.com/rrich-kray/" alt="github-link">
              <img
                src="https://www.svgrepo.com/show/35001/github.svg"
                alt="gh-icon"
                style={{
                  height: "75px",
                  padding: "10px;",
                  marginRight: "10px",
                }}
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/ryankray/" alt="linkedIn-link">
              <img
                src="https://www.svgrepo.com/show/138936/linkedin.svg"
                alt="linkedIn-icon"
                style={{ height: "90px", padding: "10px" }}
              ></img>
            </a>
            <a
              href="https://docs.google.com/document/d/1gzlYNrQPsWXRgWO9sgm8WkaF6DgDphDc/edit?usp=sharing&ouid=108149335393344460606&rtpof=true&sd=true"
              alt="linkedIn-link"
            >
              <img
                src="https://www.svgrepo.com/show/262734/curriculum-vitae-resume.svg"
                alt="resume-icon"
                style={{ height: "90px", padding: "10px" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRedux;
