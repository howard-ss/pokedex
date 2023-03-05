import React, { useState } from "react";

const randomData = ["Pikachu", "Butterfree", "Ditto","Chore"];

const CaughtPokemon = () => {
  //const date = new Date().toLocaleDateString();
  const [list, setList] = useState([]);
  const [caught, setCaught] = useState(0);

  function catchPokemon() {
    setCaught((prevCaught) => prevCaught + 1);
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomValue = randomData[randomIndex];
    setList(list.concat(randomValue));
  }
  return (
    <>
      {/* <p>Caught {caught.length} Pokemon on {props.pokemonDate}</p>
      {caught.map ((item,index)=>{
        return <li key={index}>{item}</li>;
              })}
      <button onClick={catchPokemon}>catch Pokemon</button> */}
       <button onClick={catchPokemon}> catch pokemon </button><br></br>
        caught {caught} Pokemon on
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
