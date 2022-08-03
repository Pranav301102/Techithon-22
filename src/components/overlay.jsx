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
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h1 id="ieee">IEEE Techithon 2022</h1>
        <img src="logo.png" alt="carnivel"></img>
      </div>
    </div>
    <div className="Event-cards" >
      <div className="events">
        <h1 className="event-link" >Your Events</h1>
        <EventCards/>
      </div>
    </div>
    <div className="Event-cards" >
      <div className="events">
        <h1 className="event-link" >Events</h1>
        <EventCards/>
      </div>
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
