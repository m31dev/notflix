import React, { use, useEffect, useState } from "react"
import logo from './assets/NOTFLIX.svg'
import halo from './assets/halo.svg'
import './App.css'
import Search from "./components/Search"
import Loader from "./components/Loader"
import ErrorMessage from "./components/ErrorMessage"
import MovieCard from "./components/MovieCard"




const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/discover/movie`

const API_HEADER = {
  method: 'GET',
  headers:{
    'accept':'application/json',
    'Authorization':`Bearer ${TMDB_API_KEY}`
  }
}


export default function App(){
  const [searchTerm,setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList,setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getMovies = async() =>{
    setErrorMessage('')
    setIsLoading(true)
    const endpoint = `${BASE_URL}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`

    try{
      const response = await fetch(endpoint,API_HEADER);
    if(!response.ok){
      throw new Error('There was a problem getting movies')
    }
    const data = await response.json()
    if(data.results.length === 0){
      setErrorMessage('Movies not found')
    }

    console.log(data.results)
    setMovieList(data.results)

    }catch(error){
      console.error(`Failed to fetch movies:`,error)
      setErrorMessage(error.message)
    }finally{
      setIsLoading(false)
    }
    
    


  }

  useEffect(()=>{
    getMovies()
  },[])

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
        <div className="content">
          {isLoading?(<Loader/>):errorMessage?(<ErrorMessage Message={errorMessage}/>):(
            <div className="movie-list">
            {
              movieList.map((movie)=>(
                <MovieCard key={movie.id} Movie={movie}/>
              ))
            }
         </div>
          )}
        </div>
      </main>
     
     
    </div>
  )
}
