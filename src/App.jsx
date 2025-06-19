import { useState, useEffect } from 'react';
import Score from './components/Score';
import Cards from './components/Cards';
import fetchPokemons from './components/fetchPokemon';

import './App.css'

let didInit = false;   // purpose: not making react remounting twice per fetched element

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if(!didInit){
    didInit = true;
    fetchPokemons(handlePokemons);
    }
  }, []); 


  const handlePokemons = (pokemons) => {
    setPokemons([...pokemons]);
  }
  
  const handleScore = (element) => {
    setScore(element);
  }

  const handleBestScore = (element) => {
    setBestScore(element);
  }

  return(
    <div>
      <Score score={score} bestScore={bestScore}></Score>
      <Cards changeScore={handleScore} changeBestScore={handleBestScore} pokemons={pokemons}></Cards>
    </div>
  )
}

export default App
