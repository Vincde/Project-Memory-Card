import { useEffect, useState } from "react";


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
