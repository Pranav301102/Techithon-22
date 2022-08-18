import styled from "styled-components";

export function Sponsers() {
  return (
    <Slider>
      <SlideTrack>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
        <Slide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
            height="100"
            width="250"
            alt=""
          />
        </Slide>
      </SlideTrack>
    </Slider>
  );
}

export function Footer() {
  return (
    <>
      <div class="main">
        <div class="col1">
          <p class="heading">Developed By</p>
          <ul>
            <li>
              <a href="#">Pranav Trivedi</a>
            </li>
            <li>
              <a href="#">Aryan Chavan</a>
            </li>
            <li>
              <a href="#">Sahil Bhat</a>
            </li>
          </ul>
        </div>

        <div class="col2">
          <p class="heading">Contact Us</p>
          <ul>
            <li>
              <a href="#">Phone</a>
            </li>
            <li>
              <a href="#">Mail</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>

      </div>

      <div class="bottom">
        <p class="copyright">© 2020 IEEE Techithon. All rights reserved.</p>

      </div>
    </>
  );
}

const Slider = styled.div`
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before,
  &::after {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;
const SlideTrack = styled.div`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
`;
const Slide = styled.div`
  height: 200px;
  width: 250px;
`;
