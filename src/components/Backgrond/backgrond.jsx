import React, { useState, useRef, useEffect,  } from "react";
import NET from "vanta/dist/vanta.net.min";
import "./background.css";



export default function NetBackgrond({children}) {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

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
        })
      );
      console.log(vantaEffect);
    }
    return () => {
      if (vantaEffect) 
      {vantaEffect.destroy()
        console.log("instance distroyed")
      }
    };
  }, [vantaEffect]);

	return (
		<div className="background-page" ref={myRef}>{children}</div>
	);
}