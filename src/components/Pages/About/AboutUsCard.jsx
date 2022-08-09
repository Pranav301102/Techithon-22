import React from 'react'
import "./about.css";
function AboutUsCard() {
  return (
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
  )
}

export default AboutUsCard