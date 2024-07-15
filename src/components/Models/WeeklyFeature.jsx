import React, { useRef } from 'react'
import weeklyFeatureScene from '../../assets/3d/weekly-features_scene.glb'
import { useGLTF } from '@react-three/drei'
export default function WeeklyFeature({ ...props }) {
    const weeklyFeatureRef = useRef(null)
    const model = useGLTF(weeklyFeatureScene, true)
    return (
        <group ref={weeklyFeatureRef} {...props}>
            <primitive object={model.scene} />
        </group>
    )
}
