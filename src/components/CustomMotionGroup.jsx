import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'
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
        <motion.group {...props} ref={ref}>
            {children}
        </motion.group>
    );
}

export default CustomMotionGroup;
