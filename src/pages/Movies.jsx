import React, { useEffect, useState } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { searchMovies } from '../api/search.movies';

const Search = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState('');

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmitSearch = e => {
    e.preventDefault();
    setSearchParams(value ? { query: value } : {});
  };

  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      searchMovies(query).then(({ data }) => {
        setList(data.results);
      });
    }
  }, [query]);

  return (
    <>
      <h1>Search movies</h1>
      <form onSubmit={onSubmitSearch}>
        <input
          onChange={e => setValue(e.target.value)}
          value={value}
          type="text"
          name="lastName"
          placeholder="Search film..."
        />
        <button>Search</button>
      </form>
      <hr />
      <ul>
        {list &&
          list.map(el => (
            <li key={el.id}>
              <Link state={{ from: location }} to={`/movies/${el.id}`}>
                {el.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Search;
