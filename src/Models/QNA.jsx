import { Canvas } from '@react-three/fiber'
import React, { lazy, Suspense } from 'react'
const ModelLoader = lazy(() => import('../components/loaders/ModelLoader'));
const OrbitController = lazy(() => import('../components/OrbitController'));
const QNAScene = lazy(() => import('../Scenes/QNAScene'));

export default function QNA() {
    return (
        <Suspense fallback={<ModelLoader />}>
            <Canvas >
                <ambientLight intensity={2.5} />
                <pointLight intensity={2}
                    position={[0.32, 0, 0.6]}
                />
                <QNAScene
                    scale={[3, 3, 3]}
                    position={[0, -1.5, -0.5]}
                    rotation={[0.05, 1, 0]}
                />
                <OrbitController />
            </Canvas>
        </Suspense>
    )
}