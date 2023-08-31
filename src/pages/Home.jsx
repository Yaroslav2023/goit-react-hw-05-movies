import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../api/search.movies';
import { Link } from 'react-router-dom';

const HomeList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      setFilms(data.results);
    });
  }, []);

  return (
    <>
      <div>Trending today</div>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomeList;
