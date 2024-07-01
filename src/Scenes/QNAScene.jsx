import React, { useRef } from 'react'
import interviewScene from '../assets/3d/qna_scene.glb'
import { useGLTF } from '@react-three/drei'
export default function QNAScene({ ...props }) {
    const model = useGLTF(interviewScene, true);
    const interviewSceneRef = useRef();
    return (
        <group>
            <primitive object={model.scene} {...props} ref={interviewSceneRef} />
        </group>
    )
}
