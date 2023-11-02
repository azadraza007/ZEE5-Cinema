import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios'
import "./Input.css"
import { useAppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
// import SearchResults from './SearchResults';
function Inputbox() {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate()

  const {searchTerm,setSearchTerm,filterMovies} = useAppContext()
  const handleSearch = async() => {

    filterMovies(searchTerm)
    navigate('/search')
    console.log('first')
    const myResponse = await axios.get('https://academics.newtonschool.co/api/v1/ott/show/',
   {
    headers:{
      'projectId': 'lzex6csx2fvp',
    }
   }
    )

    console.log(myResponse.data.data)

    setMovies(myResponse.data.data)
    // fetch('https://academics.newtonschool.co/api/v1/ott/show/', {
    //   method: 'GET',
    //   headers: {
    //     projectId: 'lzex6csx2fvp',
    //   },
    // })
    //   .then((response) => {
    //     response.json()
    //     console.log(response)
    //   })
    //   .then((data) => {
    //     const filteredMovies = data?.data?.filter((movie) =>
    //       `${movie.description + movie.title}`
    //         .toLowerCase()
    //         .includes(searchInput.toLowerCase())
    //     );
    //     // console.log(filteredMovies);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value)
  };


  return (
    <div className="nav-input">
      <input
      style={{
        "width":'350px'
      }}
        type="text"
        placeholder="Search movie"
        value={searchInput}
        onChange={(e) => {
          handleChange(e)
          setSearchTerm(e.target.value)
        
        }}
      />
      <AiOutlineSearch className="search-icon" onClick={handleSearch} />
      {/* <SearchResults movies={movies} /> */}
    </div>
  );
}

export default Inputbox;
