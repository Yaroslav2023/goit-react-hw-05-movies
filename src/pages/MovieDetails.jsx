import React, { Suspense, useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../api/search.movies';

const Movie = () => {
  const [info, setInfo] = useState({ dafault: 1234 });

  const { id } = useParams({});

  const location = useLocation();

  const goBack = useRef(location.state?.from || '/');

  useEffect(() => {
    fetchMovieById(id).then(({ data }) => {
      setInfo(data);
    });
  }, [id]);

  const { title, genres, backdrop_path, vote_average, overview } = info;

  return (
    <>
      <Link to={goBack.current}>Go back</Link>
      <hr />
      <img
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w185/${backdrop_path}`
            : 'https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg'
        }
        alt={title}
      />
      <h1>{title}</h1>
      <div>User score: {vote_average}</div>
      <h2>Overview</h2>
      <p> {overview}</p>
      <div>
        Genres:
        {genres ? (
          genres.map(el => <p key={el.id}>{el.name}</p>)
        ) : (
          <div>No genres</div>
        )}
      </div>
      <hr />
      <div>Addition information</div>
      <li>
        <Link to="cast">Show Cast</Link>
      </li>
      <li>
        <Link to="reviews">Show Reviews</Link>
      </li>
      <hr />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movie;
