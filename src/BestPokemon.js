import react from "react";

const BestPokemon = () => {
      const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    (<p>My favorite Pokemon is Squirtle</p>),
    (
      <ul>
        {abilities.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
    )
  );
};

export default BestPokemon;
