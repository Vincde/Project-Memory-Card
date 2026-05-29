import { useEffect, useState } from "react";
import initFetch from "./functions/initFetch";
import Score from "./components/Score";
import Cards from "./components/Cards";
import './App.css';

let didInit = false;

function App() {
  const [pokemons, setPokemons] = useState([]);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if(!didInit){
      didInit = true;
      setPokemons(initFetch());
    }
  }, []);


  return(
    <>
    <Score score={score} bestScore={bestScore}></Score>
    <Cards pokemons={pokemons} onMatch={setScore} onGreater={setBestScore}></Cards>
    </>
  );
}

export default App
