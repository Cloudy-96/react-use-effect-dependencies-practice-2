import { useState } from "react";

function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState('')

  console.log("Planet", planet);

  

  return <li>{planet.name} - First Film {firstFilm}</li>;
}

export default PlanetsListItem;
