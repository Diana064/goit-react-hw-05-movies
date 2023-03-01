import { useState, useEffect } from 'react';
import * as ImageService from '../components/services/api';

import MoviesList from '../components/MoviesList/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ImageService.getTrendingMovies().then(setMovies);
  }, []);
  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
}
