export default function Cards({score, changeScore, bestScore, changeBestScore, pokemons, handlePokemons}) {

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

    function handleCardsClick() {
        randomizeCards();
        if((score + 1) > bestScore){
            changeBestScore(score + 1);
        }
        changeScore(score + 1);
    }



    return(
        <div>
            {pokemons.map((pokemon) => {
                return(<div key={pokemon.id} onClick={handleCardsClick}>
                    <img src={pokemon.value} alt="" />
                </div>)
            })}
        </div>
    )

}