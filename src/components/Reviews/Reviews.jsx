import { useState, useEffect } from 'react';
import * as ImageService from '../services/api';
import { useParams } from 'react-router';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    ImageService.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <>
      <ul>
        {reviews.map(({ id, content }) => (
          <li key={id}>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
