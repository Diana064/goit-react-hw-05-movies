import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </nav>
  );
}
