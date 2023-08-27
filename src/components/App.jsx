import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Search = lazy(() => import('../pages/Search'));
const Movie = lazy(() => import('../pages/Movie'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Search />} />
          <Route path="movies/:id" element={<Movie />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
