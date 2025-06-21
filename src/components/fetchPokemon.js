

/* export default function fetchPokemons(handlePokemons) {
  const randomNumber = Math.floor(Math.random() * 1302 + 1);

  fetch(`https://pokeapi.co/api/v2/pokemon?offset=${randomNumber}&limit=12`)
    .then((res) => res.json())
    .then((data) => {
      const fetches = data.results.map((singlePokemon, id) =>
        fetch(singlePokemon.url)
          .then((res) => res.json())
          .then((pokemonData) => ({
            id: id,
            value: pokemonData.sprites.front_default,
          }))
      );
      return Promise.all(fetches);
    })
    .then((pokemonUrls) => {
      handlePokemons(pokemonUrls);
    })
  } */


export default function fetchPokemons() {
  let randomNumber;
  let pokemonsArray = [];

  const p = new Promise((resolve) => {
    for(let i = 0; i < 12; i++) {
    randomNumber = Math.floor(Math.random() * 1302 + 1);
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${randomNumber}&limit=1`)
    .then((data) => data.json())
    .then((res) => {
      fetch(res.url)
      .then((data) => data.json())
      .then((pokemon) => pokemonsArray.push({id: i, value : pokemon.sprites.front_default}))
      .then(() => resolve())
      })
    }
  });
  p.then(() => {
    return  Promise.all(pokemonsArray);
  });
     
}  
