import React from "react";

// function logWhenClicked (){
//   console.log("Pokemon is clicked");
// }
const title = { color: "green" , background: "yellow" };
const landing = { background : "blue" };

function logWhenClicked() {
  alert("Pokemon is clicked on screen");
  console.log("Pokemon is clicked on log");
}
  const Logo = (props) => {
    return (
      <header>
        <h1 style = {title} >Welcome to {props.appName}</h1>
        <img style = {landing} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"alt="Pokemon"
            onClick={logWhenClicked}></img>
      </header>
    );
  };


export default Logo;
