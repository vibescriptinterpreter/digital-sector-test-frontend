import React from 'react';
import styled from 'styled-components';
import LinksNavItem from './links-nav-item';

const StyledLinksNav = styled.ul`
  list-style-type: none;
  min-width: 300px;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  height: auto;
  margin-right: 20px;
`;

const LinksNav = () => (
  <StyledLinksNav>
    {['', 'npm', 'packagist'].map((item) => <LinksNavItem key={item} value={item} />) }
  </StyledLinksNav>
);

export default LinksNav;
