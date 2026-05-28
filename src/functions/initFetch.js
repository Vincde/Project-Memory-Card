export default async function initFetch() {
    
    const numbersArr = [];
    const fetchArr = [];

    
    for(let i = 0; i < 12; i++) {
        numbersArr.push(Math.floor(Math.random() * 1000) + 1);
        const singleElement = fetch(`https://pokeapi.co/api/v2/pokemon/${numbersArr[i]}`)
        .then((el) => el.json())
        fetchArr.push(singleElement);
    }


    Promise.all(fetchArr).then(async (arr) => {
        for(const el of arr){
            console.log(el.sprites.front_default);
        }
    });
   


}