import React from 'react'
import { NavLink,useParams } from 'react-router-dom'
import {API_URL} from './Context'
import { useState,useEffect } from 'react'

export const SingleMovie = () => {
  const {id}=useParams()

  const [isLoading, setisLoading] = useState(true)
  const [movie, setMovie] = useState("")
  //const [isError, setisError] = useState({ show: "false", msg: "" })
  //const [query, setQuery] = useState("titanic")
  const getmovies = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      if (data.Response === 'True') {
        setisLoading(false)
        setMovie(data)
      }
      
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    let timerOut=setTimeout(()=>{
      getmovies(`${API_URL}&i=${id}`)
    },800)
    return ()=> clearTimeout(timerOut)
  }, [id])
  if(isLoading){
    return(
      <div className='movie-section'>
        <div className='loading'>Loading...</div>

      </div>
    )
  }
  return (
    <>
    <section className='movie-section'>
      <div className='movie-card'>
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className='card-content'>
          <p className='title'>{movie.Title}</p>
         
          <p className='card-text'>{movie.Released}</p>
          <p className='card-text'>{movie.Genre}</p>
          <p className='card-text'>{movie.imdbRating}</p>
          <p className='card-text'>{movie.Country}</p>
          <NavLink to="/" className="back-btn">Go Back</NavLink>
        </div>
      </div>
    </section>
    </>
  )
}
export default SingleMovie
