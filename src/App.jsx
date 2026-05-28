import { useEffect, useState } from "react";
import initFetch from "./functions/initFetch";


let didInit = false;

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if(!didInit){
      didInit = true;
      setPokemons(initFetch);
    }
  }, []);
}

export default App
