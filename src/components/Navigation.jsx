import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { NavList, StyledLink } from './Navigation.module.jsx';

export default function Navigation() {
  return (
    <nav>
      <NavList>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </NavList>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </nav>
  );
}
