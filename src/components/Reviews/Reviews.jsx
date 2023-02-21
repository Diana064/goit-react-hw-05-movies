import { useState, useEffect } from 'react';
import * as ImageService from '../services/api';
import { useParams } from 'react-router';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    ImageService.getMovieReviews(movieId).then(setReviews);
    console.log(reviews);
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
};
