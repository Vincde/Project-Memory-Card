/* 
  Reasoning first: 
  -what the UI will look like : various cards (probably 5 rows and 4-5 columns) with score in the upper part of page
  -What are the inputs: clicking on the cards triggers the mechanism
  -What are the outputs: reset the point counter, or add point


  PSEUDOCODE: 
  -At start, fetch different images from web and show them into structure

  Elaboration of point one: 
    - render the page
    - page has score counter component, and container with all cards
    - fetch some elements
    - randomize them into the cards
  End of first elaboration


  -user can click one image at a time
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
