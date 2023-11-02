import React, { useEffect, useState } from "react";
import './WorldHits.css'
function WorldHits(props) {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    fetch(props.url, {
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
     <div className="worldhits-img">
     <div className="worldhits-container">
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

export default WorldHits;

