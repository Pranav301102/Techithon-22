import "./about.css";
import React, { useState, useRef, useEffect, } from "react";
import AboutUsCard from "./AboutUsCard";

export default function About() {

  return (
    <>
      <div className="gridDisplay">
            <h1 className='title' >Head</h1>
            <div className="ourTeamBlock">
                
                <AboutUsCard/>
                <AboutUsCard/>
                <AboutUsCard/>
                <AboutUsCard/>
            </div>
            <h1 className='title' >Head</h1>
            <div className="ourTeamBlock">
            <AboutUsCard/>
                <AboutUsCard/>
                <AboutUsCard/>
                <AboutUsCard/>
            </div>
            <h1 className='title' >Head</h1>
            <div className="ourTeamBlock">
            <AboutUsCard/>
                <AboutUsCard/>
                <AboutUsCard/>
                <AboutUsCard/>
            </div>
            <h1 className='title' >Head</h1>
            <div className="ourTeamBlock">
            <AboutUsCard/>
                <AboutUsCard/>
                <AboutUsCard/>
                <AboutUsCard/>
            </div>
        </div>


    </>
  );
}
