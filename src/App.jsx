import "./App.css";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import AboutRedux from "./components/AboutRedux/AboutRedux";
import ThreeNav from "./components/ThreeNav/ThreeNav";
import ProjectPage from "./components/ProjectPage/ProjectPage"
import ThreeProjects from "./components/ThreeProjects/ThreeProjects";
import ThreeAbout from "./components/ThreeAbout/ThreeAbout";

function App() {
  // Clicking on tile will set isPostActive to true, and also set activePost to the content of that post
  // JavaScript checks the same location in memory for equality. Even if two objects have the same contents, they will not occupy the same locatin in memory, and therefore JavaScript will not declare them strictly equal
  const [activePost, setActivePost] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activePage, changeActivePage] = useState("home");

  function renderPage() {
    switch (activePage) {
      case "home":
        return <Hero changeActivePage={changeActivePage} />;
        break;
      case "projects":
        return <Projects setActivePost={setActivePost}/>;
        break;
      case "about":
        return <ThreeAbout />;
      default:
        return <Hero />;
        break;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <>
      {/* {isLoading ? (
        <Splash />
      ) : ( */}
      <div className="wrapper">
        <div id="app">
          <ThreeNav
            activePage={activePage}
            changeActivePage={changeActivePage}
          />
          {activePost.length !== 0 ? (
            <ProjectPage
              projectData={activePost}
              setActivePost={setActivePost}
            />
          ) : (
            <>
              <Hero />
              <Projects setActivePost={setActivePost} />
              <AboutRedux />
              {/* {renderPage()} */}
            </>
          )}
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default App;
