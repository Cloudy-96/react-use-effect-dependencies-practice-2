import { useEffect, useState } from "react";

function PeopleListItem(props) {

  const { person } = props;
  const [homeworld, setHomeworld] = useState('');
  console.log("person", person)

  //useEffect
  //fetch
  useEffect (() => {
    fetch(person.homeworld)
    .then((res) => res.json())
    .then((personData) => {
      console.log("data", personData)
      setHomeworld(personData)
    })
    
  }, [person])

console.log("sth", person.homeworld)

  return (
    <ul>
      <li>{person.name} - Homeworld: {homeworld.name}</li>
    </ul>
  );
}

export default PeopleListItem;
