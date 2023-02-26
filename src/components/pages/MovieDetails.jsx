import { useState, useEffect } from 'react';
import * as ImageService from '../services/api';
import { useParams } from 'react-router';
import { Outlet } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
import MovieData from 'components/MovieData/MovieData';
import {
  WrapperButton,
  WrapperContext,
  StyledLink,
} from './MovieDetails.module';

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
      <MovieData
        handleGoBack={handleGoBack}
        img={movies.poster_path}
        title={movies.title}
        average={movies.vote_average}
        genres={movies.genres}
        overview={movies.overview}
      />
      <WrapperContext>
        <h2>Aditional Information: </h2>
        <WrapperButton>
          <StyledLink to="cast" state={location.state}>
            Сast
          </StyledLink>
          <StyledLink to="reviews" state={location.state}>
            Reviews
          </StyledLink>
        </WrapperButton>
      </WrapperContext>
      <Outlet />
    </>
  );
}
