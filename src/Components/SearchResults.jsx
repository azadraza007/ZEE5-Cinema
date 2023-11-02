import React from 'react';
import { useAppContext } from '../Context/AppContext';

function SearchResults({ }) {
  const {movies,filteredMovies} = useAppContext()
  return (
    <div className="search-results">
      <h2>Search Results:</h2>
      <ul>
        {filteredMovies?.map((movie) => (
          <li key={movie.id}>
            <img src={movie.thumbnail} alt="" />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;