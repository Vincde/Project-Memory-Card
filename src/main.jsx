/* 
  Reasoning first: 
  -what the UI will look like : various cards (probably 5 rows and 4-5 columns) with score in the upper part of page
  -What are the inputs: clicking on the cards triggers the mechanism
  -What are the outputs: reset the point counter, or add point

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
