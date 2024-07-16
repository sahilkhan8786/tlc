import { useAnimations, useGLTF } from '@react-three/drei'
import React, { memo, useEffect, useRef } from 'react'

function LearningModule({ ...props }) {
    const learningModuleRef = useRef(null)
    const model = useGLTF('https://res.cloudinary.com/dyupdbnls/image/upload/v1721144174/learning_module_scene_m8upmu.glb', true)
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
export default memo(LearningModule)