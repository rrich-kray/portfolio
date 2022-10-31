import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Image,
  ScrollControls,
  Scroll,
  useScroll,
  Html,
} from "@react-three/drei";
import projects from "../Projects/data";

// You can listen and react to scroll with the useScroll hook which gives you useful data like the current scroll offset, delta and functions for range finding: range, curve and visible. The latter functions are especially useful if you want to react to the scroll offset, for instance if you wanted to fade things in and out if they are in or out of view

function Project({ index, position, scale, url, w, xW, ...props }) {
  // Goal is to fade projects out, and diminish in size when they are not at the center of page.
  // Can map data.curve value to opacity and scale of project
  // Main issue is calculating the proper range for data.curve
  const imageRef = useRef();
  const htmlRef = useRef();
  const data = useScroll();
  const { width } = useThree((state) => state.viewport);
  const useThreeObj = useThree();
  const { size } = useThree();

  useEffect(() => {
    const imagePosAdj = imageRef.current.position.x / 10;
    console.log(imagePosAdj);
    console.log(width);
    console.log(imagePosAdj / width);
    console.log(useThreeObj);
    console.log(size.width);
  }, []);

  // How do I determine the location on the page of this individual project?
  // data.curve method accepted fractions as arguments. Implies 0 is start of page and 1 is end of page.
  useFrame((state, delta) => {
    const modifier = data.curve(index * xW, index * xW + w);
    imageRef.current.opacity = modifier;
  });
  return (
    <group>
      <Image
        ref={imageRef}
        position={position}
        scale={scale}
        url={url}
        {...props}
      >
        <Html ref={htmlRef} position={position} scale={scale}>
          <div className="three-project-tile-content" style={{backgroundImage: url, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: 'no-repeat'}}>

          </div>
        </Html>
      </Image>
    </group>
  );
}

function Projects({ w = 5, gap = 0.15 }) {
  const xW = w + gap;
  const { width } = useThree((state) => state.viewport);
  return (
    <ScrollControls
      horizontal
      infinite
      damping={5}
      pages={(width - xW + projects.length * xW) / width}
    >
      <Scroll>
        {projects.map((project, i) => (
          <Project
            key={i}
            index={i}
            position={[i * xW, 0, 0]}
            scale={[w, 6, 5]}
            url={project.backgroundImage}
            w={w}
            xW={xW}
          />
        ))}
      </Scroll>
    </ScrollControls>
  );
}

function ThreeProjects(props) {
  return (
    <Canvas style={{ background: "black" }}>
      <color attach="backaground" args={["black"]} />
      <Projects />
    </Canvas>
  );
}

export default ThreeProjects;
