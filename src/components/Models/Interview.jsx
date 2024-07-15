import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import interviewScene from '../../assets/3d/interview_scene.glb'

export default function Interview({ ...props }) {
    const interviewRef = useRef(null)
    const model = useGLTF(interviewScene, true);


    return (
        <group >
            <primitive object={model.scene} {...props} ref={interviewRef} />
        </group>

    )
}
