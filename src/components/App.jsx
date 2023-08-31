import { Route, Routes, Navigate } from 'react-router-dom';
import React, { lazy } from 'react';
import { Layout } from './Layout';

const HomeList = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeList />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
