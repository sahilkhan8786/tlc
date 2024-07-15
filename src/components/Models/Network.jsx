import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import networkScene from '../../assets/3d/network_scene.glb'
export default function Network({ ...props }) {
    const networkRef = useRef(null)
    const model = useGLTF(networkScene, true)
    return (
        <group {...props} ref={networkRef}>
            <primitive object={model.scene} />
        </group>
    )
}
