import { useGLTF } from '@react-three/drei'
import React, { memo } from 'react'

function Interview({ ...props }) {
    const model = useGLTF('https://res.cloudinary.com/dyupdbnls/image/upload/v1721144162/interview_scene_grxzf8.glb', true);


    return (
        <group >
            <primitive object={model.scene} {...props} />
        </group>

    )
}
export default memo(Interview)