import React from 'react';
import styled from 'styled-components';
import LinkItem from './link-item';
import { useLinks } from '../../../../context/links';
import filterByCategory from '../../../../helpers/filterByCategory';
import searchInCategory from '../../../../helpers/searchInCategory';

const StyledLinkList = styled.ul`
  list-style-type: none;
`;

const LinkList = () => {
  const { links, currentCategory, searchLabel } = useLinks();
  const filteredLinks = filterByCategory(currentCategory, links);
  const filteredByCategory = searchInCategory(searchLabel, filteredLinks);
  return (
    <StyledLinkList>
      {
        filteredByCategory.map(({
          id,
          name,
          link,
          category,
          elected,
        }) => (
          <LinkItem
            key={id}
            id={id}
            name={name}
            link={link}
            category={category}
            elected={elected}
          />
        ))
      }
    </StyledLinkList>
  );
};

export default LinkList;
