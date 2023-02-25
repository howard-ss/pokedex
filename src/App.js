// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// const Logo = ()=>{
//   const appName = "CYF's Pokedex";
//    return(
//   <header>
//     <h1>Welcome to the {appName}</h1>
//     <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
//   </header>
//   );
// };

// const BestPokemon =()=>{
//   const abilities = ["Anticipation", "Adaptability", "Run-Away"];
//   return (
//     <p>My favorite Pokemon is Squirtle</p>,
//     <ul>
//       {
//         abilities.map((element)=>{
//           return<li key={element}>{element}</li>;
//         })
//       }
//     </ul>
//   );
// };

// const CaughtPokemon = ()=>{
//   const date = new Date().toLocaleDateString();
//    return(
//     <p>Caught 0 Pokemon on {date}</p>
//   );
// };

//const abilities = ["Anticipation", "Adaptability", "Run-Away"];

function App (){
  return (
   <div>
  {/* //  <header>
  //   <h1>Welcome to the Pokedex</h1>
  //   <img  src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
  //  </header> */}
  <Logo appName="Pokedex"/>
  <BestPokemon />
  <CaughtPokemon />
   </div>
  );
}

export default App;
