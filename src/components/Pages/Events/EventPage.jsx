import React from "react";
import {TechCards ,SportsCards,CultureCards} from "./Events";
import styled from 'styled-components';
import Backgrond from "../../Backgrond/backgrond";

export const EventCategory = styled.h1`
  display:block;
  line-height: 40px;
  margin-right: 1rem;
  font-size: "5em";
  color: #fff;
  text-decoration: none;
  padding-top: 120px ;
  padding-left:3vw ;
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

export default function Events() {
  return (
    <div>
    <EventCategory>TechEvents</EventCategory>
    <TechCards />
    <EventCategory>Cultural Events</EventCategory>
    <CultureCards/>
    <EventCategory>Sports Events</EventCategory>
    <SportsCards/>
    </div>
  );
}

