import React, { useEffect, useState } from "react";
import { useAppContext } from "./Context/AppContext";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function Favroite() {
  const [trend, setTrend] = useState([]);
  const navigate = useNavigate()
  const [favorites,setFavorites] = useState()
  const {favoritesArray,movies} = useAppContext()

  console.log(movies)

  const objectifyFavorites = (favoritesArray,moviesArray)=>{
    console.log(moviesArray?.data)
    const filteredFavorites = moviesArray?.data?.filter(
      (singleMovie)=>{
       return favoritesArray?.some(movie => movie === singleMovie?._id)
      }
    );
    setFavorites(filteredFavorites)
  }
  const { userData,setUserData } = useAppContext()

  console.log(userData)
 


  useEffect(() => {
    objectifyFavorites(favoritesArray,movies)
  }, [])
  return (
    <>
      <h1 style={{ marginTop: '55px' }}>Your Favorites movie</h1>
      <div className="trend-img">
        <div className="trend-container">
          {/* <button className="rightarrow">❱</button> */}
          {favorites && favorites?.map((movie, index) => (
            <div key={index}>
              <img src={movie?.thumbnail} alt={`Thumbnail ${index}`} />
            </div>
          ))}
          {/* <button className="leftarrow">❱</button> */}
        </div>
      </div>
    </>
  )
}

export default Favroite
