import { useState, useEffect } from 'react';
import * as ImageService from '../services/api';
import { useParams } from 'react-router';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
export const Cast = () => {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    ImageService.getMovieCredits(movieId).then(setCast);
    console.log(casts);
  }, [movieId]);
  return (
    <>
      <h1>Cast</h1>
      <ul>
        {casts.map(({ profile_path, id, name, character }) => (
          <li key={id}>
            <img src={`${BASE_IMG_URL}${profile_path}`} alt={name} />
            <p> {name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};