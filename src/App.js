
import * as THREE from 'three'
import { Suspense , useRef} from 'react'
import { Canvas, useThree, useFrame} from '@react-three/fiber'
import { CameraShake, OrbitControls,Html,ScrollControls,useScroll, Scroll } from '@react-three/drei'
import { KernelSize } from 'postprocessing'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import {Model} from './components/model'
import { Header } from './components/header'
import './styles.css'


export default function App() {
  const ref = useRef()
  
  return (
    <>
    <div id = 'container'>
    <Canvas className= 'canvas' dpr={(window.devicePixelRatio)*2} camera={{ position: [0, 0, 15] }}>
      <color attach="background" args={['black']} />
      <ambientLight />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Suspense fallback={null}>
      <ScrollControls pages={3}>
        <Model/>
        <EffectComposer multisampling={8}>
          <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
          <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
        </EffectComposer>
      </ScrollControls>
      </Suspense>
      <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />
    </Canvas>
      <div className = 'overlay'>
      <Header/>
      </div>
    </div>
    </>
  )
}
