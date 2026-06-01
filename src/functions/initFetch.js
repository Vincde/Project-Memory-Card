export default async function initFetch() {
    const offsetArray = [];
    const fetchArr = [];
    const finalPokemons = [];

    
    for(let i = 0; i < 12; i++) {
        let randomOffset = Math.floor(Math.random() * 1000) + 1;

        while(offsetArray.find(el => el === randomOffset) !== undefined){
            randomOffset = Math.floor(Math.random() * 1000) + 1;
        }

        offsetArray.push(randomOffset);

        const singleElement = fetch(`https://pokeapi.co/api/v2/pokemon/${randomOffset}`)
        .then((el) => el.json())
        .catch((er) => console.log(er));
        fetchArr.push(singleElement);
    }

    Promise.all(fetchArr).then(async (arr) => {
        for(const el of arr){
            finalPokemons.push({name: el.name, img: el.sprites.front_default});
        }
    });
    return finalPokemons;
}