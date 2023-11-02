import React, { useEffect, useState } from "react";
import './TopHolly.css'
import { Link, useNavigate } from "react-router-dom";
import { useTodo } from "./Context/WatchContext";
import { useAppContext } from "./Context/AppContext";
import { useAuthContext } from "./Context/AuthContext";
//import { useNavigate } from "react-router-dom";
function TopHolly(props) {
const navigate = useNavigate()
  const [trend, setTrend] = useState([]);
  const {movies,addToFavorites,favoritesArray,removeFromFavorites} = useAppContext()
  const {token} = useAuthContext()

  console.log(movies?.data)
  function isProductInCart(productId, cart) {
    return cart.some(item => item === productId);
  }
  const{setCurrWatch}  = useTodo()
  useEffect(() => {
    fetch(props.url , {
      method: "GET",
      headers: {
        projectId: "lzex6csx2fvp",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setTrend(data.data);
      });
  }, []);

 const setToFav=(id)=>{
console.log(id)
  let token = decodeURIComponent(document.cookie)
  console.log(token)
 fetch("https://academics.newtonschool.co/api/v1/ott/watchlist/like",{
  method: "PATCH",
  headers: {
  Authorization: `Bearer ${token}`,
  'projectID': 'lzex6csx2fvp',
     },
  Body:JSON.stringify(
    {
      "showId" : id
   }
  )
 })
 //console.log(projectId)
 .then((data)=>data.json())
  .then((data)=>console.log(data))
}



  return (
    <>
     <h1 style={{marginTop:'55px'}}>{props.heading}</h1>
     <div className="top10-img">
     <div className="top10-container">
        {movies && movies?.data?.map((movie, index ) => {

          return <div key={index} style={{position:'relative'}}>
          <img className = "top-holly-img" src={movie.thumbnail} alt={`Thumbnail ${index}`} />
          <Link to ='/video'> <button onClick={()=>setCurrWatch(movie)} className="top-holly-btn">Watch now</button></Link>
         
         {
          isProductInCart(movie._id,favoritesArray) ? <button onClick={()=>{
            removeFromFavorites(movie?._id)
          }} className="fav-btn">Remove From Fav</button> : <button onClick={()=>{
            if(!token){
              navigate("/login")
            }else{
              addToFavorites(movie?._id)
            }
           
          }} className="fav-btn">Add to Fav</button>
         }
        
      
         
         

          </div>
        }
        )}
      </div>
     </div>
    </>
  );
}

export default TopHolly;
