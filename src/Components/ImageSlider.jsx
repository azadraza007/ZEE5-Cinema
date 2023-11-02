import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import HomeCarousel from './HomeCarousel';
import { useTodo } from '../Context/WatchContext';
function ImageSlider() {
    const navigate = useNavigate()
const[movies,setMovies] = useState([])
const {setCurrWatch} = useTodo();

 const handleWatch = (movie)=>{
    setCurrWatch(movie)
    navigate("/video")
}
useEffect(() => {
    fetch('https://academics.newtonschool.co/api/v1/ott/show/', {
      method: "GET",
      headers: {
        "projectId": "lzex6csx2fvp"
      }
    })
    .then((r) => r.json())
    .then((data) => {
        setMovies(data.data)
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);
  return (
    <div>
      <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            movies &&
            movies.map((movie, idx) => (
                <div>
             <HomeCarousel thumbnail={movie.thumbnail} title={movie.title}  data= {{url:movie.video_url}} key={idx}
             
             />
             <button onClick={()=>handleWatch(movie)}>Watch now</button>
                </div>
              

            ))
          }
          
        </Carousel>
    </div>
  )
}

export default ImageSlider
