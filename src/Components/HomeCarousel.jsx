import React from 'react'
import { Link } from 'react-router-dom'
import { useTodo } from '../Context/WatchContext'
function HomeCarousel({thumbnail , title , k , data}) {
    const{setCurrWatch}  = useTodo()
  return (
    
       <Link to = "/video"  className="posterImage"  onClick={()=>setCurrWatch(data)} key={k}>
           <div>
           <img src={thumbnail} alt={title} className="div-img" /> 
            </div>    
        </Link>
   
  )
}

export default HomeCarousel
