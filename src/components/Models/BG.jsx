import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import skyScene from '../../assets/3d/sky_scene.glb'
import { useFrame } from '@react-three/fiber'
export default function BG({ ...props }) {
    const skyRef = useRef(null)
    const model = useGLTF(skyScene, true)


    useFrame((_, delta) => {
        skyRef.current.rotation.y += delta * 0.01;
    })

    return (
        <group {...props} ref={skyRef}>
            <primitive object={model.scene} />
        </group>

    )
}
