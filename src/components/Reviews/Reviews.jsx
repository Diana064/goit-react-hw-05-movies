import { useState, useEffect } from 'react';
import * as ImageService from '../services/api';
import { useParams } from 'react-router';
import { Alarm } from './Reviews.module';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    ImageService.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, content }) => (
            <li key={id}>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Alarm>There is no information about Reviews</Alarm>
      )}
    </>
  );
}
