import { useState } from 'react';
import Score from './components/Score';

import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  const handleScore = (element) => {
    setScore(element);
  }

  const handleBestScore = (element) => {
    setBestScore(element);
  }

  return(
    <div>
      <Score score={score} bestScore={bestScore}></Score>
      <Cards></Cards>
    </div>
  )
}

export default App
