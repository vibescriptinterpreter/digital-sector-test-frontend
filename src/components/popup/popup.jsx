import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLinks } from '../../context/links';

const StyledPopup = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, .7);
  visibility: ${function visibility(props) { return props.isOpen ? 'visible' : 'hidden'; }};
  opacity: ${function opacity(props) { return props.isOpen ? '1' : '0'; }};
  transition: all 0.3s ease;
`;

const StyledPopupWindow = styled.div`
  position: relative;
  width: 560px;
  padding: 70px 55px 63px; 
  transform: ${function transform(props) { return props.isOpen ? 'translateY(0)' : 'translateY(-3rem)'; }};
  box-shadow: 0px 4px 60px rgb(0, 0, 0, .15);
  opacity: ${function opacity(props) { return props.isOpen ? '1' : '0'; }};
  transition: all 0.3s ease;
  background-color: #fff;
`;

const StyledPopupClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  width: 1.4rem;
  height: 1.4rem;
  background-color: transparent;
  padding: 0;
  border: none;
  user-select: none;
  cursor: pointer;

  &:hover, &:focus {
    
  }

  &:before, &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #000000;
  }

  &:before {
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }
`;

const Popup = ({ children }) => {
  const { newLinkPopupOpen, setNewLinkPopupOpen } = useLinks();

  return (
    <StyledPopup isOpen={newLinkPopupOpen}>
      <StyledPopupWindow isOpen={newLinkPopupOpen}>
        <StyledPopupClose onClick={() => setNewLinkPopupOpen(false)} />
        {children}
      </StyledPopupWindow>
    </StyledPopup>
  );
};

Popup.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Popup;
