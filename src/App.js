
import * as THREE from 'three'
import { Suspense , useRef} from 'react'
import { Canvas,} from '@react-three/fiber'
import { CameraShake, OrbitControls,Html,ScrollControls,useScroll, Scroll } from '@react-three/drei'
import { KernelSize } from 'postprocessing'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import {Model} from './components/model'
import { Header } from './components/Header/header'
import './styles.css'
import Overlay from './components/overlay'

// (window.devicePixelRatio)
export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  return (
    <>
    <div id = 'container'>
    <Canvas className= 'canvas' dpr={[1, 1.5]} camera={{ position: [0, 0, 15] }} onCreated={(state) => state.events.connect(overlay.current)}>
      <color attach="background" args={['black']} />
      <ambientLight />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <Suspense fallback={null}>
        <Model scroll={scroll}/>
        <EffectComposer multisampling={8}>
          <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
          <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={2} />
        </EffectComposer>
      </Suspense>
      <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />
    </Canvas>
    <Overlay ref={overlay} caption={caption} scroll={scroll} />
    <div className = 'overlay'>
      <Header/>
    </div>
    </div>
    </>
  )
}
