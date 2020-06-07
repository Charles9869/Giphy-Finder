import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to='/'>
        <h1>Giphs Finder</h1>
      </Link>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  height: 60px;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
  }
`;

export default Navbar;
