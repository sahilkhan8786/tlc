import { useGLTF } from '@react-three/drei';
import React, { memo } from 'react'
function Chronological({ ...props }) {
    const model = useGLTF('https://res.cloudinary.com/dyupdbnls/image/upload/v1722959315/chronological_scene_esg7eg.glb', true)
    return (
        <group  {...props}>
            <primitive object={model.scene} />
        </group>
    )
}
export default memo(Chronological)