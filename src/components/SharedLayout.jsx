import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink, Header } from './StyledComponent/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledNavLink to="/home">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
