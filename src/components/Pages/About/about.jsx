import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import "./styles.css";

function About() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			console.log({ el: myRef.current });
			setVantaEffect(
				NET({
					THREE,
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: 0xff8900,
					backgroundColor: 0x001b140b,
					points: 8.0,
					maxDistance: 27.0,
					spacing: 20.0,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div className="about-page" ref={myRef}>
			THIS IS THE ABOUT PAGE
		</div>
	);
}

export default About;
