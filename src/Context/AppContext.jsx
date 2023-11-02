import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'
const AppContext = React.createContext()
export const AppProvider = ({ children }) => {

    const [movies,setMovies]  = useState([])

    const {token} = useAuthContext()
    const [searchTerm,setSearchTerm ] = useState('')
    const [favoritesArray,setFavoritesArray] = useState([])
    console.log(token)
    const navigate = useNavigate()

    const [filteredMovies,setFilteredMovies] = useState(movies);
    const [userData, setUserData] = useState();
    const [favorites,setFavorites] = useState([]);
const getAllMovies = async()=>{
    const myResponse = await axios.get('https://academics.newtonschool.co/api/v1/ott/show/',
   {
    headers:{
      'projectId': 'lzex6csx2fvp',
    }
   }
    )

    console.log(myResponse?.data?.data)

    setMovies(myResponse?.data)
}

const getFavorites = ()=>{
  console.log(localStorage.getItem('favorites'))
  const favs = localStorage.getItem('favorites')
  if(favs){
    console.log(favs.split(','))
    setFavoritesArray(favs.split(','))
  }
}


  useEffect(() => {
    getAllMovies()
    getFavorites()
    
  }, [])


  const filterMovies = (searchTerm)=>{

    console.log(movies)

    const filtered =  movies?.data?.filter((movie)=>{
        let searchTermLowerCase = movie?.title?.toLowerCase()
        console.log(movie?.title?.startsWith(searchTermLowerCase))
        return movie?.title?.toLowerCase().startsWith(searchTerm)
    })

    setFilteredMovies(filtered)
    console.log(filtered)
  }

  const addToFavorites = async(payload)=>{

    favoritesArray.push(payload)
   
    const uniqueFavoritesArray = [...new Set(favoritesArray)];
    setFavoritesArray(uniqueFavoritesArray);
    
    localStorage.setItem('favorites',uniqueFavoritesArray);
    
  }

  const removeFromFavorites = async(payload)=>{

    const newFavoritesArray = favoritesArray?.filter((favId)=>{
      return favId!==payload
    })
    setFavoritesArray(newFavoritesArray);
    
    localStorage.setItem('favorites',newFavoritesArray);
    
  }

 

  console.log(favoritesArray)


  const handleLogin = ()=>{

  }
  

  return (
    <AppContext.Provider
    value={{favoritesArray,removeFromFavorites, movies,searchTerm,setSearchTerm,filterMovies,filteredMovies,userData, setUserData,handleLogin,addToFavorites }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useAppContext = () => {
  return useContext(AppContext)
}