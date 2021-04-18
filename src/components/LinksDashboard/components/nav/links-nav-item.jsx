import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiFillFolderOpen } from 'react-icons/ai';
import { useLinks } from '../../../../context/links';

const StyledLinksNavItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  background-color: #F8F8F8;
  padding: 1rem;
  cursor: pointer;
  font-size: 18px;
`;

const LinksNavItem = ({ value }) => {
  const { setCurrentCategory } = useLinks();
  /* eslint-disable-next-line  */
  const text = value ? value : 'Все';

  return (
    <StyledLinksNavItem onClick={() => setCurrentCategory(value)}>
      {text}
      <AiFillFolderOpen size="25px" style={{ margin: '1px 0 0 10px' }} />
    </StyledLinksNavItem>
  );
};

LinksNavItem.propTypes = {
  value: PropTypes.string.isRequired,
};

export default LinksNavItem;
