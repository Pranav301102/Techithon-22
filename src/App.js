
import { useState,  Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import { Reflector, CameraShake, OrbitControls, useTexture, Html } from '@react-three/drei'
import { KernelSize } from 'postprocessing'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import {Model} from './components/model'

export default function App() {
  return (
    <Canvas dpr={(window.devicePixelRatio)*2} camera={{ position: [0, 0, 15] }}>
      <color attach="background" args={['black']} />
      <ambientLight />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Suspense fallback={null}>
      <Model />
        <EffectComposer multisampling={8}>
          <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
          <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
        </EffectComposer>
      </Suspense>
      <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />
    </Canvas>
  )
}
