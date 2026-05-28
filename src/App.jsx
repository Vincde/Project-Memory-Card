import { useEffect, useState } from "react";
import initFetch from "./functions/initFetch";
import Score from "./components/Score";
import Cards from "./components/Cards";
import './App.css';

let didInit = false;

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if(!didInit){
      didInit = true;
      setPokemons(initFetch());
    }
  }, []);


  return(
    <>
    <Score></Score>
    <Cards></Cards>
    </>
  );
}

export default App
