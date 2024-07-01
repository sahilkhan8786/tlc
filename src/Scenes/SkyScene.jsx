import React, { useRef } from 'react';
import skyScene from '../assets/3d/sky_scene.glb';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
export default function SkyScene({ ...props }) {
    const model = useGLTF(skyScene, true);
    const skySceneRef = useRef();

    useFrame((_, delta) => {
        skySceneRef.current.rotation.y += delta * 0.01;
    })

    return (
        <group>
            <primitive object={model.scene} {...props} ref={skySceneRef} />
        </group>


    )
};
