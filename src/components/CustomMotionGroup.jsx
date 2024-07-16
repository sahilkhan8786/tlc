import React, { useRef, useEffect, Suspense, memo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

function CustomMotionGroup({ position, scale, children, ...props }) {
    const ref = useRef();
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            position,
            scale,
            transition: { duration: 0.5 },
        });
    }, [position, scale, controls]);

    useFrame(() => {
        if (ref.current) {
            ref.current.position.lerp(new THREE.Vector3(...position), 0.1);
            ref.current.scale.lerp(new THREE.Vector3(...scale), 0.1);
        }
    });

    return (
        <Suspense fallback={<Html><span /></Html>}>
            <motion.group {...props} ref={ref}>
                {children}
            </motion.group>
        </Suspense>
    );
}

export default memo(CustomMotionGroup);
