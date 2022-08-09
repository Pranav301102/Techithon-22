
import Card from "../../Cards/Card"
import { EventsData } from "./EventData"
import  styled  from 'styled-components';

const TechEvents = EventsData.filter(EventsData => EventsData.category === "tech")
const SportsEvents = EventsData.filter(EventsData => EventsData.category === "sports")
const CulturalEvents = EventsData.filter(EventsData => EventsData.category === "culture")

function CreateCard(Events){
    return(
        <Card 
         name =  {Events.name}
         disc =  {Events.disc}
         key =   {Events.id}
         time =  {Events.time}
         date =  {Events.date}
         venue = {Events.venue}
         reg =   {Events.reg}
        />
    );
}

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 60px;
  row-gap: 140px;
  margin-left: 100px;
  margin-top: 10px;
  z-index: 50;
  /* height: 50vh; */

  @media only screen and  (max-width: 500px) {
  display: grid;
  grid-template-columns: auto ;
  column-gap: 10px;
  row-gap: 140px;
  /* width: 400px; */
  margin-left: 60px;
  margin-top: 10px;
  z-index: 50;
}
/* ipad mini*/
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 50px;
  row-gap: 140px;
  width: 400px;
  margin-left: 70px;
  margin-top: 10px;
  z-index: 50;
}
@media only screen and (min-width: 1024px) and (max-width: 1424px) {
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 50px;
  row-gap: 140px;
  width: 400px;
  margin-left: 70px;
  margin-top: 10px;
  z-index: 50;
}

`;



export  function TechCards() {
    return (
      <>
      <CardGrid>
        {TechEvents.map(CreateCard)}
      </CardGrid>
      </>
    )
}

export  function SportsCards() {
  return (
    <>
    <CardGrid>
      {SportsEvents.map(CreateCard)}
    </CardGrid>
    </>
  )
}

export  function CultureCards() {
  return (
    <>
    <CardGrid>
      {CulturalEvents.map(CreateCard)}
    </CardGrid>
    </>
  )
}



  