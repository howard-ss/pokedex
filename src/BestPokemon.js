import React from "react";

const BestPokemon = (props) => {
  // const BestPokemon = ({ pokemonAbility }) => {
  // const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <>
    <h3>My favorite Pokemon is Squirtle</h3>
      <ul>
        {props.pokemonAbility.map((element) => {
          // {pokemonAbility.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
    </>
  );
};

export default BestPokemon;
