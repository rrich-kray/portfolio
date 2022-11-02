/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: PounUP (https://sketchfab.com/PounUP)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/glasses-4dbf229576fd4a6194777c3d811cf9ad
title: Glasses
*/

// import sceneUrl from "./scene.gltf"

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import sceneUrl from './glasses.glb'

export function Glasses(props) {
  const { nodes, materials } = useGLTF(sceneUrl)
  return (
    <group {...props} dispose={null} castShadow>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-0.04, 0, Math.PI]} scale={100}>
            <mesh geometry={nodes.Glasses_LP_All_0.geometry} material={materials.material} castShadow/>
            <mesh geometry={nodes.Glasses_LP_Material002_0.geometry} material={materials['Material.002']} castShadow/>
          </group>
        </group>
      </group>
    </group>
  )
}

// useGLTF.preload('/models/glasses/scene.gltf')