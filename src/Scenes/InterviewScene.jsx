import React, { useRef } from 'react'
import interviewScene from '../assets/3d/interview_scene.glb'
import { useGLTF } from '@react-three/drei'
export default function InterviewScene({ ...props }) {
    const model = useGLTF(interviewScene, true);
    const interviewSceneRef = useRef();
    return (
        <group>
            <primitive object={model.scene} {...props} ref={interviewSceneRef} />
        </group>
    )
}
