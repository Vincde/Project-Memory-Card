import { useState, useEffect } from 'react';
import Score from './components/Score';

import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 1302 + 1);
    const pokemons = [];
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${randomNumber}&limit=12`)
    .then((result) => result.json())
    .then((element) => pokemons.push(element.url));
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
