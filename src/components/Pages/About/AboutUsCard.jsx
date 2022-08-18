import React from 'react'
import "./about.css";
function AboutUsCard(props) {
  return (
    <>
        <section>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={props.img} alt="Zoro"/>
                </div>
                <div class="contentBx">
                  <h3>{props.name}</h3>
                  <h2>{props.post}</h2>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href={props.instagram}><img src='github.png' ></img></a>
                </li>
                <li>
                  <a href={props.linkdin}><img src='instagram.png' ></img></a>
                </li>
                <li>
                  <a href=""><button>Icon</button></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </>
  )
}

export default AboutUsCard