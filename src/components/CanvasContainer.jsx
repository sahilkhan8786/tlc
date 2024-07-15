import React, { lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import CustomMotionGroup from './CustomMotionGroup';

const BG = lazy(() => import('./Models/BG'));
const Interview = lazy(() => import('./Models/Interview'));
const QNA = lazy(() => import('./Models/QNA'));
const Network = lazy(() => import('./Models/Network'));
const Chronological = lazy(() => import('./Models/Chronological'));
const LearningLeap = lazy(() => import('./Models/LearningLeap'));
const LearningModule = lazy(() => import('./Models/LearningModule'));
const WeeklyFeature = lazy(() => import('./Models/WeeklyFeature'));

export default function CanvasContainer({ positions }) {
    return (
        <Canvas>
            <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={0} />
            <ambientLight intensity={2} />
            <directionalLight intensity={1} position={[2, 1, 3]} />

            <BG scale={[6.5, 6.5, 6.5]} />


            <CustomMotionGroup
                position={positions.Interview.position}
                scale={positions.Interview.scale}
            >
                <Interview rotation={[0, 1, 0]} />
            </CustomMotionGroup>




            <CustomMotionGroup
                position={positions.QNA.position}
                scale={positions.QNA.scale}
            >
                <QNA rotation={[0, 1, 0]} />
            </CustomMotionGroup>



            <CustomMotionGroup
                position={positions.Network.position}
                scale={positions.Network.scale}
            >
                <Network rotation={[0, 1, 0]} />
            </CustomMotionGroup>



            <CustomMotionGroup
                position={positions.Chronological.position}
                scale={positions.Chronological.scale}
            >
                <Chronological rotation={[0, 1, 0]} />
            </CustomMotionGroup>



            <CustomMotionGroup
                position={positions.LearningLeap.position}
                scale={positions.LearningLeap.scale}
            >
                <LearningLeap rotation={[0, 1, 0]} />
            </CustomMotionGroup>



            <CustomMotionGroup
                position={positions.LearningModule.position}
                scale={positions.LearningModule.scale}
            >
                <LearningModule rotation={[0, 3, 0]} />
            </CustomMotionGroup>



            <CustomMotionGroup
                position={positions.WeeklyFeature.position}
                scale={positions.WeeklyFeature.scale}
            >
                <WeeklyFeature rotation={[0, 0, 0]} />
            </CustomMotionGroup>

        </Canvas>
    );
}
