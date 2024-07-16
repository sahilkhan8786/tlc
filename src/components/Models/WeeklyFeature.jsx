import React, { memo } from 'react'
import { useGLTF } from '@react-three/drei'
function WeeklyFeature({ ...props }) {

    const model = useGLTF('https://res.cloudinary.com/dyupdbnls/image/upload/v1721144164/weekly-features_scene_pn88bv.glb', true)
    return (
        <group {...props}>
            <primitive object={model.scene} />
        </group>
    )
}
export default memo(WeeklyFeature)