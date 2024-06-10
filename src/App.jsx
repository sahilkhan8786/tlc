import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { OrbitControls } from "@react-three/drei";
import Car from "./models/Car";


const Island = lazy(() => import('./models/Island'))
export default function App() {
  const [isRotating, setIsRotating] = useState(false)
  return (
    <div className="w-full h-screen bg-red-500 flex items-center justify-center">

      <Canvas className={`${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>
        <pointLight intensity={80} position={[0, 0, 0]} />
        <pointLight intensity={80} position={[2, 2, 5]} />
        <Suspense fallback={<Loader />}>
          {/* <ambientLight intensity={5000} /> */}
          {/* <pointLight intensity={45} position={[0, 4, 0]} /> */}
          {/* <ambientLight intensity={50} /> */}

          {/* <hemisphereLight intensity={5} /> */}
          <Island
            rotation={[0.25, 0, 0]}
            position={[0, 1.8, 0]}
            scale={[4, 4, 4]}
            setIsRotating={setIsRotating}
            isRotating={isRotating}
          />
          <Car
            scale={[.1, .1, .1]}
            position={[-0.2, -1, 2.8]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}