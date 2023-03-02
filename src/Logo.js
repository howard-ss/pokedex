import React from "react";

const Logo = (props) => {
 // console.log(props, "<----prop");
 // const appName = "CYF's Pokedex";
  return (
    <header>
      <h1>Welcome to the {props.appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pokemon"></img>
    </header>
  );
};

export default Logo;
