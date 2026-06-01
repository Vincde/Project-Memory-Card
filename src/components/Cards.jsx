import "./../styles/scoreBoard.css" 

export default function Cards({pokemons, handleClickEvent}) {
    return(
        <div className="cardsContainer">
            {pokemons.map((pokemon) => {
                return(
                    <div className="singlePokemon" onClick={() => handleClickEvent(pokemon.name)}>
                        <img src={pokemon.img} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                    </div>
                )
            })}
        </div>
    )
}