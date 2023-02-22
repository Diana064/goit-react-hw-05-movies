import { NavLink, useLocation } from 'react-router-dom';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
