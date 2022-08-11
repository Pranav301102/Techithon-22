import React from "react";
import "../Cards/Cards.css";
import Card from "./Card";
import { EventsData } from "../Pages/Events/EventData";
import { CreateCard } from "../Pages/Events/Events";
import { CardGrid } from "../Pages/Events/Events";

const PriorityEvents = EventsData.filter(
  (EventsData) => EventsData.priority === true
);

function EventCards() {
  return (
    <>
      <CardGrid>{PriorityEvents.map(CreateCard)}</CardGrid>
    </>
  );
}

export default EventCards;
