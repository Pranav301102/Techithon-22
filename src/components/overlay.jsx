import React, { forwardRef } from "react"
import { Header } from "./Header/header"
import '../styles.css'
import { useFrame } from '@react-three/fiber';
import EventCards from './Cards/EventCards';

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <>
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      // caption.current.innerText = scroll.current.toFixed(2)
    }}
    className="scroll">
    <Header />
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1 id="ieee">IEEE</h1>
        <h1>Techithon</h1>
        <h1>2022</h1>
        Aliquip eiusmod dolor magna exercitation labore ex eiusmod aute enim.
      </div>
    </div>
    <div id="events" style={{ height: "120vh" }}>
      <div className="dot">
        <h1>Events</h1>
        Labore non aute sunt commodo aliqua ipsum ea ullamco deserunt.
      </div>
      <EventCards/>
    </div>
    <div style={{ height: "50vh" }}>
      <div className="footer">
        <h1>Sponsers</h1>
    </div>
    </div>
    {/* <span className="caption" ref={caption}>
      0.00
    </span> */}
  </div>
  </>
))

export default Overlay
