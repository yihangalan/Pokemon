import { useDebugValue, useState } from "react";
import Pokemon from "./Pokemon"


function App() {
  function ran(){
    return Math.floor(Math.random()*1008+1)

  }
  const [array, setArray] = useState([])
  async function getFetch() {
    var url = 'https://pokeapi.co/api/v2/pokemon/'+ ran();
    var promise = fetch(url).then(function (response) {
      if (response.status === 200) {
        return response.json();
      } else {
        return {}
      }
    });

    promise = promise.then(function (data) {
      setArray([...array, {image:data.sprites.front_default, name: data.name}]);
      console.log(array);
    }).catch(function (err) {
      console.log(err);
    })
  }
  function deletePokemon(){
    console.log("aga");
  }

  return (
    <div className="App">
      <h1>My pokemon</h1>
      <button onClick={getFetch}>Add random Pokemon</button>
      <Pokemon array = {array} deletePokemon = {deletePokemon()}/>
    </div>
  )
}

export default App
