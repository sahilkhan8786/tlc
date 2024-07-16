import { useGLTF } from '@react-three/drei';
import React, { memo } from 'react'
function Chronological({ ...props }) {
    const model = useGLTF('https://res.cloudinary.com/dyupdbnls/image/upload/v1721144144/chronological_scene_j6ms43.glb', true)
    return (
        <group  {...props}>
            <primitive object={model.scene} />
        </group>
    )
}
export default memo(Chronological)