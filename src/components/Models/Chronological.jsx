import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react'
import chronologicalScene from '../../assets/3d/chronological_scene.glb'
export default function Chronological({ ...props }) {
    const chronologicalRef = useRef();
    const model = useGLTF(chronologicalScene, true)
    return (
        <group ref={chronologicalRef} {...props}>
            <primitive object={model.scene} />
        </group>
    )
}
