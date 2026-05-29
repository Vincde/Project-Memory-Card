import { useState } from "react"

export default function Score({score, bestScore}) {
    return(
        <div className="scoreBoard">
            <h2>Hi! hit the elements!</h2>
            <div>
                <p>Score: </p>
                <p>Best Score: </p>
            </div>
        </div>
    )
}