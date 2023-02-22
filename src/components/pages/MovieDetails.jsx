import { useState, useEffect } from 'react';
import * as ImageService from '../services/api';
import { useParams } from 'react-router';
import { Outlet } from 'react-router';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
export default function MovieDetails() {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    ImageService.getMovieDetails(movieId).then(setMovies);
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state.from);
  };
  if (!movies) {
    return;
  }
  return (
    <>
      <h1>MovieDetails</h1>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <h2>{movies.title}</h2>
      <img
        src={`${BASE_IMG_URL + movies.poster_path}`}
        alt={movies.title}
      ></img>

      <NavLink to="cast" state={location.state}>
        cast
      </NavLink>
      <NavLink to="reviews" state={location.state}>
        reviews
      </NavLink>
      <Outlet />
    </>
  );
}
