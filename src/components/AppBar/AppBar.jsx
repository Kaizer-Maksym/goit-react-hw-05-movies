import React from 'react';
import Navigation from '../Navigation/Navigation';
import { NavContainer } from './AppBar.styled';

const AppBar = () => {
  return (
    <NavContainer>
      <Navigation />
    </NavContainer>
  );
};

export default AppBar;
