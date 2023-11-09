import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchURL);
      setMovies(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h1>{title}</h1>
      {movies.mapap((movie) => (
        <img
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      ))}
    </div>
  );
}

export default Row;
