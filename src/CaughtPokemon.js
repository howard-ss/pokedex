import React, { useState } from "react";

const randomData = ["Pikachu", "Butterfree", "Ditto","Chore"];

const CaughtPokemon = (props) => {
  //const date = new Date().toLocaleDateString();
  const [list, setList] = useState([]);
  const [caught, setCaught] = useState(0);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function catchPokemon() {
    setCaught((prevCaught) => prevCaught + 1);

    const randomIndex = Math.floor(Math.random() * list.length);
    const randomValue = randomData[randomIndex];
    setList(list.concat(randomValue));

    if(pokemonNameInput === ""){
      return;
    }

    setCaught (caught.concat(pokemonNameInput));
    setPokemonNameInput("");
  }

  function handleInputChange (event){
    console.log(event.target.value);
    setPokemonNameInput(event.target.value);
  }

  return (
    <>
        <input
         type="text"
         value={pokemonNameInput}
         onChange={handleInputChange}
        />

       <button onClick={catchPokemon}> catch pokemon </button><br></br>
        caught {caught.length} Pokemon on {props.pokemonDate}
      {/* <button onClick={addToList}>catch Pokemon: </button> */}
      {list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </>
  );
};

export default CaughtPokemon;

//  export default CaughtPokemon = function(props){
//     return <p>Caught 0 Pokemon on {props.pokemonDate}</p>;
// };
