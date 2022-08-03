import React from 'react'
import '../Cards/Cards.css';
import Tilt from 'react-vanilla-tilt';

function Card({ heading, disc }) {
  return (
    <>
      {/* <div className="card">
            <h2>{heading}</h2>
            <div className="disc">{disc}</div>
            <button className='btn' >Register</button>
        </div> */}
      {/* <div className="card">
        <h2>Heading</h2>
        <div className="disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tenetur dignissimos minus error laboriosam. Facere amet nemo laboriosam aliquid soluta, expedita similique tempora .</div>
        <button className='btn' >Register</button>
      </div> */}
      <Tilt options={{scale: 2, max: 25}}  style={{ height: 300, width: 300 }}>
      <div className="card">
        <h2>Heading</h2>
        <div className="disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tenetur dignissimos minus error laboriosam. Facere amet nemo laboriosam aliquid soluta, expedita similique tempora .</div>
        <button className='btn' >Register</button>
      </div>
      </Tilt>
    </>
  )
}

export default Card