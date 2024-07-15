import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import qnaScene from '../../assets/3d/qna_scene.glb'
export default function QNA({ ...props }) {
    const qnaRef = useRef(null)
    const model = useGLTF(qnaScene, true);
    return (
        <group {...props} ref={qnaRef}>
            <primitive object={model.scene} />
        </group>
    )
}
