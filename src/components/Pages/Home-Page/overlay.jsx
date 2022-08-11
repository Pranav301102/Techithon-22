import React, { forwardRef } from "react";
import { Header } from "../../Header/header";
import "./home.css";
import { useFrame } from "@react-three/fiber";
import EventCards, { Eventcarousel } from "../../Cards/EventCards";

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <>
    <div
      ref={ref}
      onScroll={(e) => {
        scroll.current =
          e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
        // caption.current.innerText = scroll.current.toFixed(2)
      }}
      className="scroll"
    >
      <div style={{ height: "100vh" }}>
        <div className="dot">
          <h1 id="ieee">IEEE Techithon 2022</h1>
          {/* <h1> fest theme</h1> */}
          <img src="logo.png" alt="carnivel"></img>
          <div className="buttons">
            <button className="neon-button">Signup</button>
            <button className="neon-button">Sign In</button>
          </div>
        </div>
      </div>
      <div className="Event-cards">
        <div className="events">
          <h1 className="event-link">Your Events</h1>
          <Eventcarousel/>
        </div>
      </div>
      <div className="Event-cards">
        <div className="events">
          <h1 className="event-link">Events</h1>
          <Eventcarousel/>
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
));

export default Overlay;

/* <ScrollContainer>
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
    </ScrollContainer> */
