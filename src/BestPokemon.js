import react from "react";


const BestPokemon = (props) => {
// const BestPokemon = ({ pokemonAbility }) => {
  // const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    (<p>My favorite Pokemon is Squirtle</p>),
    (
      <ul>
        {props.pokemonAbility.map((element) => {
        // {pokemonAbility.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
    )
  );
};

export default BestPokemon;
