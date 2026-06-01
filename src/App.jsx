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

  useEffect(() => {
    if(!didInit){
      didInit = true;
      initFetch().
      then((newPokemons) => {
        setPokemons(newPokemons)
      });
    }
  }, []);

  function handleClickEvent(name) {
    if(clicked.includes(name)){
      setScore(0);
      if(score > bestScore){
        setBestScore(score);
      }
      setClicked([]);
      setPokemons(initFetch());
    }else{
      setPokemons([...(pokemons.sort(() => Math.random() - 0.5))]);
      setScore(score + 1);
      setClicked([...clicked, name]);
    }
  }


  return(
    <>
    <Score score={score} bestScore={bestScore}></Score>
    <Cards pokemons={pokemons} handleClickEvent={handleClickEvent}></Cards>
    </>
  );
}

export default App
