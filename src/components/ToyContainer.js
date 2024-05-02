import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  const toyCards = toys.map((toys)=>(
    <ToyCard key={toys.id} 
    toy ={toys}/>
  ))

  return (
    <div id="toy-collection">
      {toyCards}
      {/* Render the collection of ToyCards */}</div>
  );
}

export default ToyContainer;
