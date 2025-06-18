import { useState, useEffect } from 'react';
import Score from './components/Score';

import './App.css'

let didInit = false;   // purpose: not making react remounting twice per fetched element

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if(!didInit){
    didInit = true;


    const randomNumber = Math.floor(Math.random() * 1302 + 1);
    const pokemons = [];
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${randomNumber}&limit=12`) 
    .then((result) => result.json()) // the first fetch returns urls of pokemons
    .then((element) => {
      for(const [id, fetchedPokemon] of element.results.entries()) {  // iterate over the array of pokemons
        fetch(fetchedPokemon.url)   // fetch the single pokemon
        .then((result) => result.json())
        .then((pokemon) => pokemons.push({id: id, value: pokemon.sprites.front_default})) // save the url of pokemon sprite in pokemon
        .then(() => console.log(pokemons));
      }});



    }
  }, []); 



  
  const handleScore = (element) => {
    setScore(element);
  }

  const handleBestScore = (element) => {
    setBestScore(element);
  }

  return(
    <div>
      <Score score={score} bestScore={bestScore}></Score>
{/*       <Cards changeScore={handleScore} changeBestScore={handleBestScore}></Cards>
 */}    </div>
  )
}

export default App
