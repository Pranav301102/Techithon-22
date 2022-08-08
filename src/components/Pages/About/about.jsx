import "./about.css";
import React, { useState, useRef, useEffect, } from "react";
import NET from "vanta/dist/vanta.net.min";

export default function About() {
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
          points: 20.00,
          maxDistance: 30.00,
          spacing: 25.00
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy()
        console.log("instance distroyed")
      }
    };
  }, [vantaEffect]);
  return (
    //   <div className="background-page" ref={myRef}>

    // </div>
    <>
      <section>
        <div class="container">
          <div class="card">
            <div class="content">
              <div class="imgBx">
                <img src="https://image.flaticon.com/icons/png/256/4213/4213641.png" />
              </div>
              <div class="contentBx">
                <h3>Giraffe</h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <a href=""><button>Icon</button></a>
              </li>
              <li>
                <a href=""><button>Icon</button></a>
              </li>
              <li>
                <a href=""><button>Icon</button></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}


