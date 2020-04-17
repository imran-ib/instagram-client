import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  width: 100vw;
  height: 53px;
  background-color: ${({ theme }) => theme.whiteBox};
`;

const Header = () => {
  return (
    <HeaderStyles>
      <Navbar />
    </HeaderStyles>
  );
};

export default Header;
