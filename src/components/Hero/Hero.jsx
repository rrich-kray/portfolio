import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, softShadows, Stars } from "@react-three/drei";
import Loading from "../Loading/Loading";
import * as THREE from "three";
import earth from "./images/map.jpg";
import earthBump from "./images/earth_bump.jpg";
import earthSpec from "./images/earthspec.jpg";
import Satellite from "./Satellite"
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import "./Hero.css";

function Earth() {
  const ref = useRef();
  const earthTexture = new THREE.TextureLoader().load(earth);
  const earthBumpTexture = new THREE.TextureLoader().load(earthBump);
  const earthSpecTexture = new THREE.TextureLoader().load(earthSpec);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 25;
  });

  return (
    <group>
      {/* <Satellite position={[3, 1, 1]} scale={0.1}/> */}
      <mesh
        castShadow
        receiveShadow
        ref={ref}
        position={[0, -0.885, 4.3]}
        rotation={[0, 15, 0]}
      >
        <ambientLight intensity={2} />
        <sphereGeometry attach="geometry" args={[1, 128, 128]} />
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={earthBumpTexture}
          bumpScale={0.025}
          specularMap={earthSpecTexture}
          specular="grey"
          color="white"
        />
      </mesh>
    </group>
  );
}

const Hero = ({ changeActivePage, isLoading, setLoading }) => {
  const canvasRef = useRef();

  return (
    <div id="hero">
      {/* <div id="hero-container-left">
        <div>
          <h1 style={{ color: "black" }}>Let's Build Something Great</h1>
        </div>
      </div> */}
      <div id="hero-container-right">
        <div className="overlay"></div>
        <div className="hero-cta-container">
          <div
            style={{
              zIndex: 999,
            }}
          >
            <h1>Let's Build Something Great</h1>
            <h2>Scroll down to learn more</h2>
          </div>
          {/* <button onClick={() => changeActivePage("projects")}>Start</button> */}
        </div>
        <Canvas ref={canvasRef} dpr={[1, 2]} fallback={<Loading />}>
          <Suspense fallback={<LoadingCircle />}>
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
            <Earth />
          </Suspense>
          <OrbitControls
            autoRotate={false}
            enableZoom={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
