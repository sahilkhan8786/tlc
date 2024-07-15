import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import learningLeapScene from '../../assets/3d/learning_leaps_scene.glb'


export default function LearningLeap({ ...props }) {
    const learningLeapRef = useRef(null)
    const model = useGLTF(learningLeapScene, true)
    return (
        <group ref={learningLeapRef} {...props}>
            <primitive object={model.scene} />
        </group>
    )
}
