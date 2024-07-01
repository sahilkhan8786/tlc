import { OrbitControls } from '@react-three/drei'
import React from 'react'

export default function OrbitController() {
  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={0}
    />
  )
}
