import { useState, useEffect } from 'react';
import Search from '../components/Search/Search';
import MoviesList from 'components/MoviesList/MoviesList';
import * as ImageService from '../components/services/api';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const nameFilm = params.get('query');
  const onSubmit = query => {
    console.log(query);
    setParams({ query });
    // setNameFilm(nameFilm);
  };
  useEffect(() => {
    if (!nameFilm) {
      return;
    }
    ImageService.getSearchMovies(nameFilm).then(setMovies);
  }, [nameFilm]);

  return (
    <>
      <Search onSubmit={onSubmit} />
      <MoviesList movies={movies} />
    </>
  );
}
