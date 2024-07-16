import { useGLTF } from '@react-three/drei'
import React, { memo } from 'react'
function Network({ ...props }) {
    const model = useGLTF('https://res.cloudinary.com/dyupdbnls/image/upload/v1721144142/network_scene_qvibmo.glb', true)
    return (
        <group {...props}>
            <primitive object={model.scene} />
        </group>
    )
}
export default memo(Network)