import React from "react"
import logo from './assets/NOTFLIX.svg'
import background from './assets/radial.svg'
import './App.css'
import Search from "./Search"

export default function App(){
  return(
    <div>
      <header>
        <img 
        src={logo}
        className="logo"/>
        <h2>Not <span className="netflix">NETFLIX</span> But Still Fire</h2>
        <h3>Discover <span className="movies">Movies</span> That Are Worth Watching</h3>
         <Search/>
      </header>
     
    </div>
  )
}