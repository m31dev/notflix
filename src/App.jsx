import React, { useState } from "react"
import logo from './assets/NOTFLIX.svg'
import halo from './assets/halo.svg'
import './App.css'
import Search from "./Search"

export default function App(){
  const [searchTerm,setSearchTerm] = useState('')
  return(
    <div>
      <header>
        <img 
        src={logo}
        className="logo"/>
        <h2>Not <span className="netflix">NETFLIX</span> But Still Fire</h2>
        <h3>Discover <span className="movies">Movies</span> That Are Worth Watching</h3>
         <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </header>
      <div className="halo">
        <img src={halo} className="halo-image"/>
      </div>
      
      <main>
        <p>Popular Movies</p>
      </main>
     
     
    </div>
  )
}