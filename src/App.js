import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];

const date = new Date().toLocaleDateString();

function App (){
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon pokemonAbility ={abilities}/>
      <CaughtPokemon pokemonDate = {date} />
    </div>
  );
}

export default App;
