import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import learningModuleScene from '../../assets/3d/learning_module_scene.glb'

export default function LearningModule({ ...props }) {
    const learningModuleRef = useRef(null)
    const model = useGLTF(learningModuleScene, true)
    return (
        <group ref={learningModuleRef} {...props}>
            <primitive object={model.scene} />
        </group>
    )
}
