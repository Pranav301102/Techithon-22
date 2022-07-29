import React, { forwardRef } from "react"
import { Header } from "./Header/header"
import '../styles.css'
import { useFrame } from '@react-three/fiber';

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <>
  <Header />
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}

    className="scroll">
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>IEEE</h1>
        <h1>Techithon</h1>
        <h1>2022</h1>
        Aliquip eiusmod dolor magna exercitation labore ex eiusmod aute enim.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Events</h1>
        Labore non aute sunt commodo aliqua ipsum ea ullamco deserunt.
      </div>
    </div>
    <span className="caption" ref={caption}>
      0.00
    </span>
  </div>
  </>
))

export default Overlay
