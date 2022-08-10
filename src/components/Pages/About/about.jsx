import "./about.css";
import React, { useState, useRef, useEffect, } from "react";
import AboutUsCard from "./AboutUsCard";
import { AboutData } from "./aboutData";

const Top = AboutData.filter(EventsData => EventsData.category === "top")
const Head = AboutData.filter(EventsData => EventsData.category === "head")
const Assit = AboutData.filter(EventsData => EventsData.category === "asst")

function CreateCard(Members){
  return(
      <AboutUsCard
       name =  {Members.name}
       post =  {Members.post}
       key =   {Members.id}
       instagram =  {Members.instagram}
       linkdin =  {Members.linkdin}
       img = {Members.img}
       />
  );
}

 function TopCards() {
  return (
    <>
    <div className="ourTeamBlock">        
    {Top.map(CreateCard)}
     </div>
    </>
  )
}

 function HeadCards() {
return (
  <>
  <div className="ourTeamBlock">        
  {Head.map(CreateCard)}   
  </div>
  </>
)
}

 function AssitCards() {
return (
  <>
  <div className="ourTeamBlock">        
  {Assit.map(CreateCard)}     
  </div>
  </>
)
}

export default function About() {

  return (
    <>
      <div className="about-ieee">

      </div>
      <div className="gridDisplay">
            <h1 className='title' >Our Team</h1>
            <TopCards/>
            <h1 className='title' >Heads</h1>
            <HeadCards/>
            <h1 className='title' >Assitant Heads</h1>
            <AssitCards/>
        </div>
    </>
  );
}
