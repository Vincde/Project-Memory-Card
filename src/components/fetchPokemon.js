export default function fetchPokemons() {
    const randomNumber = Math.floor(Math.random() * 1302 + 1);
    const pokemons = [];
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${randomNumber}&limit=12`) 
    .then((result) => result.json()) // the first fetch returns urls of pokemons
    .then((element) => {
      for(const [id, fetchedPokemon] of element.results.entries()) {  // iterate over the array of pokemons
        fetch(fetchedPokemon.url)   // fetch the single pokemon
        .then((result) => result.json())
        .then((pokemon) => pokemons.push({id: id, value: pokemon.sprites.front_default})) // save the url of pokemon sprite in pokemon
        .then(() => console.log(pokemons));
      }});

    }