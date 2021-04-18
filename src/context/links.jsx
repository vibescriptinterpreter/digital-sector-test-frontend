import React, {
  createContext, useState, useContext, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';

/* eslint-disable-next-line import/prefer-default-export */
const LinksProvider = ({ children }) => {
  const firstRender = useRef(true);
  const localLinks = localStorage.getItem('links');
  const initialLinks = localLinks ? JSON.parse(localLinks) : [];
  const [links, setLinks] = useState(initialLinks);
  const [categories] = useState([
    { id: 1, text: 'packagist', value: 'packagist' },
    { id: 2, text: 'npm', value: 'npm' },
  ]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [newLinkPopupOpen, setNewLinkPopupOpen] = useState(false);
  const [searchLabel, setSearchLabel] = useState('');

  const addNewLink = (newLink) => {
    setLinks((prevLinks) => [...prevLinks, newLink]);
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }
  }, [searchLabel]);

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  return (
    // eslint-disable-next-line no-sequences
    <LinksContext.Provider value={{
      links,
      setLinks,
      newLinkPopupOpen,
      setNewLinkPopupOpen,
      categories,
      addNewLink,
      currentCategory,
      setCurrentCategory,
      searchLabel,
      setSearchLabel,
    }}
    >
      {children}
    </LinksContext.Provider>
  );
};

const LinksContext = createContext({});

const useLinks = () => useContext(LinksContext);

export {
  useLinks, LinksProvider,
};

LinksProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
