export default async function initFetch() {
    try{

        const uniqueIds = new Set();


        while(uniqueIds.size < 12) {
            uniqueIds.add(Math.floor(Math.random() * 1000) + 1);
        } 

        const fetchPromises = Array.from(uniqueIds).map((id) => 
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
                if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
        );


        const rawPokemons = await Promise.all(fetchPromises);


        return rawPokemons.map((pokemon) => ({
            name: pokemon.name,
            img: pokemon.sprites.front_default
        }));

    }catch( error ){
        console.error("Failed to fetch pokemons:", error);
        return [];
    }
}