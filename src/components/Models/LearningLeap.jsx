import { useGLTF } from '@react-three/drei'
import React, { memo } from 'react'


function LearningLeap({ ...props }) {
    const model = useGLTF('https://res.cloudinary.com/dyupdbnls/image/upload/v1721144158/learning_leaps_scene_k7dsuk.glb', true)
    return (
        <group {...props}>
            <primitive object={model.scene} />
        </group>
    )
}
export default memo(LearningLeap)