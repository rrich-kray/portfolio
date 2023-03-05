import React, {useState, useEffect, Suspense} from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { RigidBody, Physics } from "@react-three/rapier"
import "./ThreeAbout.css"
import { angleToRadians } from "../../utils/angle"
import { Box, Html, AccumulativeShadows, RandomizedLight } from "@react-three/drei"
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'
import { Mug } from "../../models/Mug/Mug"
import { Laptop } from "../../models/Laptop/Laptop"
import { Glasses } from "../../models/Glasses/Glasses"
import { Die } from "../../models/Die/Die"

function Plane(props) {
    return (
        <RigidBody type="fixed" colliders="trimesh">
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
        </RigidBody>
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
                <spotLight angle={2.75} penumbra={2} position={[25, 8, 0]} castShadow />
                <Suspense fallback={null}>
                    <Physics>
                        <Plane rotation={[-(angleToRadians(90)), 0, 0]} />
                        <Mug scale={0.01} position={[6, 15, 3]} />
                        <Glasses scale={0.0075} position={[-10, 15, -2]} rotation={[0, 1, 0]} />
                        <Die position={[7, 15, -7]} />
                        <Die position={[6.5, 26, -7]} />
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    )
}