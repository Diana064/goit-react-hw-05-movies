import { useLocation } from 'react-router-dom';
import { UlList, LiStyle, StyledLink } from './MoviesList.module';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <UlList>
      {movies.map(({ id, title }) => (
        <LiStyle key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </LiStyle>
      ))}
    </UlList>
  );
}
