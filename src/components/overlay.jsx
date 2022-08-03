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
        <h1 id="ieee">IEEE</h1>
        <h1>Techithon</h1>
        <h1>2022</h1>
        Aliquip eiusmod dolor magna exercitation labore ex eiusmod aute enim.
      </div>
    </div>
    <div className="Events" >
      <div className="event-cards">
        <h1 className="eventLink">Events</h1>
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


{/* <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "3em" }}>Let't me show you scroll animation 😀</span>
         
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200),MoveIn(500,0))}>    
          <div style={{ fontSize: "2em" }}>
            <p>lorem lorem lorem loerme rscac ahabkc anckakca cba jcb a c acb a ca hcj acka c ac a</p>
            <button>Heloo</button>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200),MoveIn(-500,0))}>
          <div style={{ fontSize: "2em" }}>
            <p>lorem lorem lorem loerme rscac ahabkc anckakca cba jcb a c acb a ca hcj acka c ac a</p>
            <button>Heloo</button>
          </div>
        </Animator>
      </ScrollPage>
     
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "3em" }}>Done</span>
          <span style={{ fontSize: "3em" }}>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer> */}