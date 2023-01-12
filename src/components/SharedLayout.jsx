import { AppBar, Toolbar } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './StyledComponent/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <AppBar position="static" sx={{ mb: 5 }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </nav>
        </Toolbar>
      </AppBar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
