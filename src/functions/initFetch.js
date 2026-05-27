export default async function initFetch() {
    const randomOffset = Math.floor(Math.random() * 1338) + 1;
    const url = `pokeapi.co/api/v2/pokemon/?limit=12&offset=${randomOffset}`;
    const data = await fetch(url);
    const res = await data.json(); // do i necessarily need the .json to obtain the single urls?

    for(const el in res.results){
        // idk if this is good
    }

}