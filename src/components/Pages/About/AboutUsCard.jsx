import React from 'react'
import "./about.css";
function AboutUsCard(props) {
  return (
    <>
        <section>
          <div class="container">
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src={props.img} alt="Zoro"/>
                </div>
                <div class="contentBx">
                  <h3>{props.name}</h3>
                  <h2>{props.post}</h2>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href={props.instagram}><button>Icon</button></a>
                </li>
                <li>
                  <a href={props.linkdin}><button>Icon</button></a>
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