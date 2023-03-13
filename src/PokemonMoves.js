import React,{ useState, useEffect } from "react";


function PokemonMoves(props) {
  const [pokemonData,setPokemonData] = useState(null);

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
    .then((res)=>res.json())
    .then((data)=>{
     //   console.log(data);
        setPokemonData(data);
         //console.log(data);
    });
  },[props.pokemonId]);


// using if/else condition statement to wrap JSX
//   if (pokemonData) {
//     return (
//       <div>
//         <p>{pokemonData.name}'s moves:</p>
//         <ul>
//           {pokemonData.moves.map((move, index) => {
//             return <li key={index}>{move.move.name}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   } else {
//     return null;
//   }

//  using ternary operator to wrap JSX:
      return pokemonData ? (
    <div>
      <p>{pokemonData.name}'s moves:</p>
      <ul>
        {pokemonData.moves.map((move, index) => {
          return <li key={index}>{move.move.name}</li>;
        })}
      </ul>
    </div>
  ) : null;


// // using double ampersand && to wrap JSX
    // return (
    //    {pokemonData &&
    //     (
    //        <>
    //          <p>{pokemonData.name}'s moves:</p>
    //             <ul>
    //              {pokemonData.moves.map((move, index) => {
    //               return <li key={index}>{move.move.name}</li>;
    //                })}
    //             </ul>
    //        </>
    //     )
    //    }
    // );

 }

export default PokemonMoves;
