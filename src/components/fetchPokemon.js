

export default function fetchPokemons(handlePokemons) {
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
  }
