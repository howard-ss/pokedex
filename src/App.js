import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];

const date = new Date().toLocaleDateString();

// function logWhenClicked() {
//   console.log("Pokemon is clicked");
// }

function App() {
  return (
    <div>
      <Logo appName="Howard's Pokedex"  />
      {/* <Logo handleClick={logWhenClicked} /> */}
      <BestPokemon pokemonAbility={abilities} />
      <CaughtPokemon pokemonDate={date} />
      {/* <PokemonMoves /> */}
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
