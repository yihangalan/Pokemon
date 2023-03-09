import { useDebugValue, useState } from "react";
import Pokemon from "./Pokemon"
import {v4 as uuid} from "uuid"



function App() {
  const [array, setArray] = useState([])
  async function getFetch() {
    var url = 'https://pokeapi.co/api/v2/pokemon/'+ Math.floor(Math.random()*1008+1);
    var promise = await fetch(url)
    const data = await promise.json()
    setArray([...array, {id:uuid(),image:data.sprites.front_default, name: data.name}]);
      
  }

  function deletePokemon(pokemon){  
    // setArray(array.filter(item => item.id !== pokemon.id));
    console.log(pokemon);
    console.log("deletePokemon被触发了");
  }
 
  
  return (
    <div className="App">
      <h1>My pokemon</h1>
      <button onClick={deletePokemon("hh")}>hhhhhh </button>
      <button onClick={getFetch}>Add random Pokemon</button>
      <Pokemon array = {array} deletePokemon = {deletePokemon}/>
    </div>
  )
}

export default App
