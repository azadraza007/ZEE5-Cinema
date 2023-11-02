import React, { useEffect, useState } from "react";
import "./NearYou.css"
function TvShows(props) {
  const [trend, setTrend] = useState([]);
   useEffect(() => {
    fetch("https://academics.newtonschool.co/api/v1/ott/show?page=25&limit=10", {
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
  return (
    <>
     <h1 style={{marginTop:'55px' , paddingLeft:'20px'}}>{props.heading}</h1>
     <div className="trend-img">
     <div className="trend-container">
        {trend.map((movie, index) => (
          <div key={index}>
            <img src={movie.thumbnail} alt={`Thumbnail ${index}`} />
          </div>
          
        ))}
       
      </div>
     
     </div>
    
    </>
  )
}

export default TvShows

