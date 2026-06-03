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
  const [clicked, setClicked] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(!didInit){
      didInit = true;
      initFetch().then(pokemons => {
        setPokemons(pokemons)
        setIsLoading(false);
      })
    }
  }, []);

  function handleClickEvent(name) {
    if(clicked.includes(name)){
      setScore(0);
      if(score > bestScore){
        setBestScore(score);
      }
      setClicked([]);
      setIsLoading(true);
      initFetch().then(pokemons => {
        setPokemons(pokemons)
        setIsLoading(false);
      })
    }else{
      setPokemons([...(pokemons.sort(() => Math.random() - 0.5))]);
      setScore(score + 1);
      setClicked([...clicked, name]);
    }
  };


  return(
    <>
    <Score score={score} bestScore={bestScore}></Score>
    {isLoading ? (
      <div className="loading-container">
        <h2>Catching wild pokemons </h2>
        <div className="spinner"></div>
      </div>
    ) : (
      <Cards pokemons={pokemons} handleClickEvent={handleClickEvent}></Cards>
    )}
    
    </>
  );
}

export default App
