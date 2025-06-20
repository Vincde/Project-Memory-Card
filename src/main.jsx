/* 
  Reasoning first: 
  -what the UI will look like : various cards (probably 5 rows and 4-5 columns) with score in the upper part of page
  -What are the inputs: clicking on the cards triggers the mechanism
  -What are the outputs: reset the point counter, or add point


  PSEUDOCODE: 

  -user can click one image at a time:  
    - if image is clicked:        <---- you are here
      -control if the image is already clicked image
        -if it is not clicked:
          -set score + 1
          -randomize cards
          -add new element to array of clicked pokemons
        -if it is clicked:
          -if score surpasses best score, set best score 
          -set score 0
          -randomize cards
          -set clicked cards to empty
        



  -If image was already clicked previously, reset the counter and reset images
  -If image was not clicked already, add one to counter and reset images
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
