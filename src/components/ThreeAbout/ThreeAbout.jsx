import React, {useState, useEffect, Suspense} from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { RigidBody, Physics } from "@react-three/rapier"
import "./ThreeAbout.css"
import { angleToRadians } from "../../utils/angle"
import { Box, Html, AccumulativeShadows, RandomizedLight } from "@react-three/drei"
import { Mug } from "../../models/Mug/Mug"
import { Laptop } from "../../models/Laptop/Laptop"
import { Glasses } from "../../models/Glasses/Glasses"

function Plane(props) {
    return (
        <mesh receiveShadow {...props}>
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="orange"/>
            <Html distanceFactor={15} occlude scale={1} transform>
                <div className="three-btn-link-container">
                   <a href="https://github.com/rrich-kray">GitHub</a>
                   <a href="https://www.linkedin.com/in/ryankray/">LinkedIn</a>
                   <a href="https://docs.google.com/document/d/1gzlYNrQPsWXRgWO9sgm8WkaF6DgDphDc/edit?usp=sharing&ouid=108149335393344460606&rtpof=true&sd=true">Resume</a>
                </div>
            </Html>
        </mesh>
    )
}

export default function ThreeAbout() {
    return (
        <div className="three-about">
            <Canvas shadows>
                <PerspectiveCamera position={[0, 15, 15]} makeDefault />
                <OrbitControls
                    autoRotate={false}
                    enableZoom={false}
                    enableRotate={false}
                />
                <ambientLight />
                <spotLight angle={2} penumbra={2} position={[25, 10, 0]} castShadow />
                <Suspense fallback={null}>
                    <Physics>
                        <Plane rotation={[-(angleToRadians(90)), 0, 0]} />
                        {/* <Box castShadow position={[0, 0, 0]} /> */}
                        <Mug scale={0.01} position={[6, 0, 3]} />
                        <Laptop position={[10, 0, -5]} rotation={[0, 5.25, 0]} scale={1.25} />
                        <Glasses scale={0.0075} position={[-10, 0.1, -2]} rotation={[0, 1, 0]} />
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    )
}