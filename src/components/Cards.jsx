import { useState } from "react";

export default function Cards({score, changeScore, bestScore, changeBestScore, pokemons, handlePokemons}) {

    const [clickedPokemons, setClickedPokemons] = useState([]); 

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

function handleCardsClick(url) {

        if(clickedPokemons.length === 0){
            changeScore(score + 1);
            setClickedPokemons([url]);
            randomizeCards();
            return;
        }

        changeScore(score + 1);
        setClickedPokemons([...clickedPokemons, url]);

        clickedPokemons.forEach((element) => {
            if(element === url){
                if(score > bestScore) changeBestScore(score);
                changeScore(0);
                randomizeCards();
                setClickedPokemons([]);
                return;
            }
        }); 
        
        
        randomizeCards();
            
        
}



    return(
        <div className="cards-container">
            {pokemons.map((pokemon) => {
                return(<div className="cards-container__pokemon" key={pokemon.id} onClick={() => handleCardsClick(pokemon.value)}>
                    <img src={pokemon.value} alt="" />
                </div>)
            })}
        </div>
    )

}