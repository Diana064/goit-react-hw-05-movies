import { useState, useEffect } from 'react';
import * as ImageService from '../services/api';
import { useParams } from 'react-router';
import { CastList, CastImg, Alarm } from './Cast.module';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
export default function Cast() {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    ImageService.getMovieCredits(movieId).then(setCast);
  }, [movieId]);
  return (
    <>
      {casts.length ? (
        <CastList>
          {casts.map(({ profile_path, id, name, character }) => (
            <li key={id}>
              {profile_path ? (
                <CastImg src={`${BASE_IMG_URL}${profile_path}`} alt={name} />
              ) : (
                <CastImg src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" />
              )}

              <p> {name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </CastList>
      ) : (
        <Alarm>There is no information about Cast</Alarm>
      )}
    </>
  );
}
