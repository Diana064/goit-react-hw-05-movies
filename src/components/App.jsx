import { Route, Routes } from 'react-router';
import Navigation from './Navigation';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export default function App() {
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
}
