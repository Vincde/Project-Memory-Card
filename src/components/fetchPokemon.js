

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


/* 
  How do we split this function: 
  - get 12 different urls.

  - fetch every url 
  - for every result use another fetch
  - return the fetched data and insert its url into the array
  - return the array
*/


export default function fetchPokemons() {
  let arrayOfUrls = [];

  let randomNumber;

  for(let i = 0; i < 12; i++) {
    randomNumber = Math.floor(Math.random() * 1302 + 1);
    
    if(aray) // if array of urls already had the number

    arrayOfUrls.push(randomNumber);

  }

  
}