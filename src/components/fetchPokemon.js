

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
  let arrayOfUrls = returnRandomUrls();

  let finalArray = arrayOfUrls.map((url, index) => {
    return fetch(url)
    .then((res) => res.json())
    .then((data) => fetch(data.results[0].url))
    .then((res) => res.json())
    .then((data) => ({id: index, value: data.sprites.front_default}))    
  });

  return Promise.all(finalArray);

}



function returnRandomUrls() {
  let arrayOfUrls = [];
  let randomNumber;

  for(let i = 0; i < 12; i++){
    randomNumber = Math.floor(Math.random() * 1302 + 1);

    if(arrayOfUrls.length > 0){
      for(let j = 0; j < arrayOfUrls.length; j++){
        if(arrayOfUrls[j] === randomNumber){
          randomNumber = Math.floor(Math.random() * 1302 + 1);
          j = -1;
        }
      }
    }

    arrayOfUrls.push(`https://pokeapi.co/api/v2/pokemon?offset=${randomNumber}&limit=1`);
    
  }
  
  return [...arrayOfUrls];
}