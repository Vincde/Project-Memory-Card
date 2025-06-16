import { useState, useMemo } from 'react';
import Score from './components/Score';

import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useMemo(() => fetch(), []);  // this fetches the images from the api. 
                               // we only need to fetch once because it needs to have the same pokemons
                               // from 1 to 1290
                               // fetch("https://pokeapi.co/api/v2/pokemon?offset=12&limit=12")
  
  const handleScore = (element) => {
    setScore(element);
  }

  const handleBestScore = (element) => {
    setBestScore(element);
  }

  return(
    <div>
      <Score score={score} bestScore={bestScore}></Score>
      <Cards changeScore={handleScore} changeBestScore={handleBestScore}></Cards>
    </div>
  )
}

export default App
