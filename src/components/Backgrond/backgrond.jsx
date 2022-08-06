import React, { useState, useRef, useEffect, Children } from "react";
import NET from "vanta/dist/vanta.net.min";
import "./background.css";

export default function NetBackgrond() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);

useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          color: 0x14b679,
          backgroundColor: 0x15173c,
          minHeight: 200.0,
		    minWidth: 200.0,
		scale: 1.0,
		scaleMobile: 1.0,
		points: 8.0,
		maxDistance: 27.0,
		spacing: 20.0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

	return (
		<div className="background-page" ref={myRef}>{Children}</div>
	);
}