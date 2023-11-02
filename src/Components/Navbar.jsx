import React from "react";
import Inputbox from "./Inputbox";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css"
import {useNavigate} from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <div className="navbar">
        <div className="img-container">
          <img src="https://shorturl.at/bM278" alt="zee-logo" />
          <ul className="nav-links">
         
            <Link to ="/">Home</Link>
            <Link to ="/tvshows">TV Shows</Link>
            <Link to ="/movie">Movies</Link>
            <Link to ="/premium">Premium</Link>
            <Link to ="/webseries">Web Series</Link>
            <Link to ="/favorites" onClick={()=>navigate('/favorites')}>Favorites</Link>
          </ul>
        </div>
        <div className="nav-action">
          <Inputbox />
          <Button />
        </div>
      </div>
    </>
  );
}

export default Navbar;
