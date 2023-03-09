import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Trail, Float, Line, Sphere, Stars, PerspectiveCamera, Html, OrbitControls, Reflector, Stage , AccumulativeShadows, RandomizedLight, RenderTexture, Decal, Text } from '@react-three/drei'
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BoxGeometry } from "three";
import "./Loading.css"

// Rotating, luminescent cubes surrounding "Loading..." text superimposed onto the plane surface. Cubes change color when clicked
// Create an electron with SphereGeometry that follows a path
// Something that toggles camera to flip to other side of plane, another scene on that side of the planes

const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;

function GlowingCube(props) {
    const cube = useRef()
    // useFrame((state, delta) => {
    //     cube.current.rotation.y += delta
    //     cube.current.rotation.x += delta
    // })

    return (
        // <Float speed={1} rotationIntensity={1}>
            <mesh castshadow position={[0, 5, 0]} {...props} ref={cube}>
                <boxGeometry />
                <meshStandardMaterial emissive="DADADA" emissiveIntensity={10} toneMapped={false} />
                <Decal>
                    <meshBasicMaterial>
                        <CubeText />
                    </meshBasicMaterial>
                </Decal>
            </mesh>
        // </Float>
    )
}

function CubeText() {
    return (
        <RenderTexture attach="map">
            <Text>Test</Text>
        </RenderTexture>
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
                <PerspectiveCamera makeDefault position={[0, 5, 10]} />
                {/* <Plane rotation={[-(angleToRadians(130)), 0, 6.5]} /> */}
                <OrbitControls autoRotate={false} enableZoom={true} enableRotate={true} />
                <Stage intensity={1} environment="city" shadows={{ type: "accumulative", bias: -0.0001 }} adjustCamera={false}>
                    <GlowingCube position={[5, 0, -2.5]} rotation={[0, 0, 0]} />
                </Stage>
                {/* <ambientLight color="#F8C069" /> */}
                {/* <spotLight angle={2.75} penumbra={2} position={[25, 8, 0]} castShadow /> */}
                <EffectComposer multisampling={8}>
                    <Bloom kernelSize={1} luminanceThreshold={3} />
                </EffectComposer>
                <AccumulativeShadows temporal frames={100} scale={20} alphaTest={0.85} color="hotpink" colorBlend={2}>
                    <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
                </AccumulativeShadows>
            </Canvas>
        </div>
    )
}