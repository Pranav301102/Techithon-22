import React, { forwardRef } from "react";
import "./home.css";
import { Eventcarousel } from "../../Cards/EventCards";
import { Footer, Sponsers } from "./footer";
import Countdown from "./../../Comming soon/CommingSoon";
import { Highlights,PreEvents } from "./Highlights";
import { RegisgteredEventcarousel } from "../../Cards/RegisteredEventCards";

const Overlay = forwardRef(({ scroll }, ref) => (
	<>
		<div
			ref={ref}
			onScroll={(e) => {
				scroll.current =
					e.target.scrollTop /
					(e.target.scrollHeight - window.innerHeight);
				// caption.current.innerText = scroll.current.toFixed(2)
			}}
			className="scroll"
		>
			<div style={{ minHeight: "100vh" }}>
				<div className="dot">
					<h1 id="ieee">IEEE Techithon 2022</h1>
					<img src="logo.png" alt="carnivel"></img>
					<Countdown />
					<div className="buttons">
						<button className="neon-button">Show Ticket</button>
						
					</div>
				</div>
			</div>
			{localStorage.token && (
				<>
					<div className="Event-cards">
						<div className="events">
							<h1 className="event-link">Your Events</h1>
							<RegisgteredEventcarousel />
						</div>
					</div>
				</>
			)}
			<div className="Event-cards">
				<div className="events">
					<h1 className="event-link">Events</h1>
					<Eventcarousel />
				</div>
			</div>
			<div className="Highlights-div">
				<div className="events">
					<h1 className="highlights">PRE EVENTS</h1>
					<PreEvents />
				</div>
			</div>
			<div className="Highlights-div">
				<div className="events">
					<h1 className="highlights">HIGHLIGHTS</h1>
					{/* <Highlights /> */}
					<div id="highlightdiv">
					<img id="highlightimg" src="event.png" alt="Highlights"></img>
					</div>
				</div>
			</div>
			<div>
				<div className="footer">
					<h1 className="sponsers">SPONSERS</h1>
					<Sponsers />
					<Footer />
				</div>
			</div>
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
