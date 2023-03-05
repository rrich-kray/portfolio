import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Trail, Float, Line, Sphere, Stars, PerspectiveCamera, Html, OrbitControls, Reflector } from '@react-three/drei'
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BoxGeometry } from "three";
import "./Loading.css"

// Rotating, luminescent cubes surrounding "Loading..." text superimposed onto the plane surface. Cubes change color when clicked
// Create an electron with SphereGeometry that follows a path
// Something that toggles camera to flip to other side of plane

const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;

function GlowingCube(props) {
    const cube = useRef()
    useFrame((state, delta) => {
        cube.current.rotation.y += delta
        // cube.current.rotation.x += delta
    })

    return (
        // <Float speed={1} rotationIntensity={1}>
            <mesh castshadow position={[0, 5, 0]} {...props} ref={cube}>
                <boxGeometry />
                <meshStandardMaterial emissive="blue" emissiveIntensity={10} toneMapped={false} />
            </mesh>
        // </Float>
    )
}

function Plane(props) {
    return (
        <mesh receiveShadow {...props} >
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="#F8C069" />
            <Html distanceFactor={15} occlude scale={1.5} transform center>
                <div className="loading-text-container">
                    <h1 className="loading-text">Loading...</h1>
                </div>
            </Html>
        </mesh>
    )
}

export default function Loading() {
    return (
        <div className="loading">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 15, 0]} />
                <Plane rotation={[-(angleToRadians(130)), 0, 6.5]} />
                <OrbitControls autoRotate={false} enableZoom={true} enableRotate={true} />
                <ambientLight color="#F8C069" />
                <spotLight angle={2.75} penumbra={2} position={[25, 8, 0]} castShadow />
                {/* <GlowingCube position={[5, 5, -2.5]} rotation={[-(angleToRadians(130)), 0, 7]} />
                <GlowingCube position={[2.5, 5, 0]} rotation={[-(angleToRadians(130)), 0, 7]} />
                <GlowingCube position={[-2.5, 10, 0]} rotation={[-(angleToRadians(130)), 0, 7]} /> */}
                <EffectComposer multisampling={8}>
                    <Bloom kernelSize={3} luminanceThreshold={3} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}