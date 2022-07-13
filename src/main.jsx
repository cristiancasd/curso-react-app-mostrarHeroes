import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HeroesApp } from './HeroesApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  //<React.StrictMode>
    <BrowserRouter> {/*Poder usar rutas, va en el nivel superior*/}
      <HeroesApp />
    </BrowserRouter>
  //</React.StrictMode>
)


