import React from "react";
import {TechCards ,SportsCards,CultureCards} from "./Events";
import styled from 'styled-components';
import Backgrond from "../../Backgrond/backgrond";
import SideBar from './SideBar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
export const EventCategory = styled.h1`
  display:block;
  line-height: 40px;
  margin-right: 1rem;
  font-size: "5em";
  color: #fff;
  text-decoration: none;
  padding-top: 120px ;
  padding-left:7vw ;
  height: 100%;
  border-bottom: 3px solid transparent;

  &:after {
  content: "";
  display: block;
  height: 3px;
  width: 0;
  max-width: 10rem;
  background: transparent;
  transition: width 5s ease, background-color 0.5s ease;
}

 &:hover:after {
  width: 100%;
  background: linear-gradient(to right,#ff2060,cyan);
}

 &.active {
  color: #ffffff;
  border: 1px solid #ffffff;
}


`;

const Page = styled.div`
 background: #222831;
`;


export default function Events() {
  // const [searchNote,setsearchNote] = useState('');
  return (
    <>
    <Page>
    <div className="menu"><SideBar/></div>
    <EventCategory id="TechEvents">Tech Events</EventCategory>
    <TechCards />
    <EventCategory id="CulturalEvents">Cultural Events</EventCategory>
    <CultureCards/>
    <EventCategory id="SportsEvents">Sports Events</EventCategory>
    <SportsCards/>
    </Page>
    </>
  );
}

