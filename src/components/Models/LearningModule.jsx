import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import learningModuleScene from '../../assets/3d/learning_module_scene.glb'

export default function LearningModule({ ...props }) {
    const learningModuleRef = useRef(null)
    const model = useGLTF(learningModuleScene, true)
    const { actions } = useAnimations(model.animations, learningModuleRef)

    useEffect(() => {
        actions['mixamo.com_Object_4.001'].play()
    }, [])
    return (
        <group ref={learningModuleRef} {...props}>
            <primitive object={model.scene} />
        </group>
    )
}
