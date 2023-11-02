import React, { useEffect, useState } from "react";
import "./HollyGemsMovies.css"
function HollyGemsMovies(props) {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    fetch("https://academics.newtonschool.co/api/v1/ott/show?page=22&limit=10", {
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
     <h1 style={{marginTop:'55px'}}>{props.heading}</h1>
     <div className="holly-gems-img">
     <div className="holly-gems-container">
        {/* <button className="rightarrow">❱</button> */}
        {trend.map((movie, index) => (
          <div key={index}>
            <img src={movie.thumbnail} alt={`Thumbnail ${index}`} />
          </div>
        ))}
        {/* <button className="leftarrow">❱</button> */}
      </div>
     </div>
    </>
  );
}

export default HollyGemsMovies;
