import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/movies">Movies </NavLink>
        </nav>
      </header>
<Suspense fallback={null}>
<Outlet />
</Suspense>
   
    </div>
  );
};
