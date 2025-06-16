export default function Score({score, bestScore}) {
    return(
        <div>
            <div>
                <h1>The Memory game</h1>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div>
                <p>Score: {score}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </div>
    )
}