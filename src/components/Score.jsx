export default function Score({score, bestScore}) {
    return(
        <div className="scoreBoard">
            <div>
                <p>Score: {score}</p>
                <p>Best Score: {bestScore}</p>
            </div>
            <h2>Win point by hitting the cards, <br />
            but care! if you hit the same element two times you lose!</h2>
        </div>
    )
}