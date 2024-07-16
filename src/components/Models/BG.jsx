import { useGLTF } from '@react-three/drei';
import React, { useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';

function BG({ ...props }) {
    const skyRef = useRef(null);
    const model = useGLTF('https://res.cloudinary.com/dyupdbnls/image/upload/v1721144148/sky_scene_nd9fnc.glb', true);

    useFrame((_, delta) => {
        skyRef.current.rotation.y += delta * 0.01;
    });

    return (
        <group {...props} ref={skyRef}>
            <primitive object={model.scene} />
        </group>
    );
}

export default memo(BG);
