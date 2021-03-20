import React from 'react';
import Navigation from '../navigation/Navigation';
import { mainRoutes } from '../../routes/mainRoutes';

const AppBar = () => {
  return (
    <header>
      <Navigation routes={mainRoutes} />
    </header>
  );
};

export default AppBar;
