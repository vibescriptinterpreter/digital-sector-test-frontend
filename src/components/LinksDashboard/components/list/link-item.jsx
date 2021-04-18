import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const StyledLinkItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 290px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  margin-bottom: 20px;
`;

const StyledLinkItemHead = styled.div`
  position: relative;
  flex-grow: 1;
  padding: .3em;
  font-weight: bold;
  font-size: 21px;
  text-align: center;
`;

const StyledLinkItemBody = styled.div`
  padding: 1rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid #efefefef;
`;

const StyledLinkItemLink = styled.a`
  color: rgba(0,0,0,.68);
  transition: color .3s ease;

  &:hover {
    color: #000;
  }
`;

const StyledLinkItemFooter = styled.div`
  padding: 1rem;
  text-align: center;
`;

const StyledLinkItemStar = styled.span`
  position: absolute;
  top: .4rem;
  right: 1rem;
`;

const LinkItem = ({
  name, link, category, elected,
}) => (
  <StyledLinkItem>
    <StyledLinkItemHead>
      {name}
      <StyledLinkItemStar>
        {elected && <AiFillStar size="28px" color="#fdc600" />}
      </StyledLinkItemStar>
    </StyledLinkItemHead>
    <StyledLinkItemBody>
      <StyledLinkItemLink href={link} target="_blank">
        {link}
      </StyledLinkItemLink>
    </StyledLinkItemBody>
    <StyledLinkItemFooter>
      {category}
    </StyledLinkItemFooter>
  </StyledLinkItem>
);

LinkItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  elected: PropTypes.bool.isRequired,
};

export default LinkItem;
