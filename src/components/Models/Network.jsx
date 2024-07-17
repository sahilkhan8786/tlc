import { useGLTF } from '@react-three/drei'
import React, { memo } from 'react'
function Network({ ...props }) {
    const model = useGLTF('https://res.cloudinary.com/dyupdbnls/image/upload/v1721191126/final_netwoking_scene_fgfhe4.glb', true)
    return (
        <group {...props}>
            <primitive object={model.scene} />
        </group>
    )
}
export default memo(Network)