import React, { lazy, Suspense } from 'react'
const ModelLoader = lazy(() => import('../components/loaders/ModelLoader'));
const SkyScene = lazy(() => import('../Scenes/SkyScene'))
import { Canvas } from '@react-three/fiber'

export default function Sky() {
    return (
        <Suspense fallback={<ModelLoader />}>
            <Canvas className='z-10'>
                <SkyScene
                    scale={[5, 5, 5]}
                />
            </Canvas>
        </Suspense>
    )
}
