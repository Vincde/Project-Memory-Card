
/* 
  Component design:
    - scoreboard
    - cards container


    scoreboard:
      var current-score: value that resets for each "lose" event, updates for "win" event
      var best-score: value that resets after each "lose" event
        in particular checks if value of current score exceeds preeceding value

    cards container:
      - shows Card component (api call with useEffect?)
      - shuffle list of cards after each click
      - memorize the list of cards and its elements (array of elements?)
      - Card:
          - returns the element with image, name, etc.
      

*/

function App() {
}

export default App
