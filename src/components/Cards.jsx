export default function Cards({changeScore, changeBestScore, pokemons, handlePokemons}) {

    function randomizeCards() {
        const newArray = shuffleArray(pokemons);
        handlePokemons([...newArray]);
    }


    function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index between 0 and i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements array[i] and array[j]
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }



    return(
        <div onClick={changeScore} onClickCapture={changeBestScore}>
            {pokemons.map((pokemon) => {
                return(<div key={pokemon.id}>
                    <img src={pokemon.value} alt="" />
                </div>)
            })}
        </div>
    )

}