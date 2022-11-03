import React, { useState, useEffect, useRef } from "react"
import { RigidBody } from "@react-three/rapier"
import * as THREE from "three"
import one from "./textures/1.jpeg"
import two from "./textures/2.jpeg"
import three from "./textures/3.jpeg"
import four from "./textures/4.jpeg"
import five from "./textures/5.jpeg"
import six from "./textures/6.jpeg"

export function Die(props) {
    const ref = useRef()
    const oneTexture = new THREE.TextureLoader().load(one)
    const twoTexture = new THREE.TextureLoader().load(two)
    const threeTexture = new THREE.TextureLoader().load(three)
    const fourTexture = new THREE.TextureLoader().load(four)
    const fiveTexture = new THREE.TextureLoader().load(five)
    const sixTexture = new THREE.TextureLoader().load(six)

    return (
        <RigidBody colliders="hull">
            <mesh ref={ref} {...props} castShadow>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshStandardMaterial attach="material" map={oneTexture}/>
                <meshStandardMaterial attach="material" map={twoTexture}/>
                <meshStandardMaterial attach="material" map={threeTexture}/>
                <meshStandardMaterial attach="material" map={fourTexture}/>
                <meshStandardMaterial attach="material" map={fiveTexture}/>
                <meshStandardMaterial attach="material" map={sixTexture}/>
            </mesh>
        </RigidBody>
    )
}