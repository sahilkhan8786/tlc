import { useGLTF } from '@react-three/drei'
import React, { memo } from 'react'
function QNA({ ...props }) {
    const model = useGLTF('https://res.cloudinary.com/dyupdbnls/image/upload/v1721144144/qna_scene_jfdgs7.glb', true);
    return (
        <group {...props} >
            <primitive object={model.scene} />
        </group>
    )
}
export default memo(QNA)