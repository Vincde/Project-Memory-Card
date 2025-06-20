export default function Cards({changeScore, changeBestScore, pokemons, handlePokemons}) {

    function randomizeCards() {

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