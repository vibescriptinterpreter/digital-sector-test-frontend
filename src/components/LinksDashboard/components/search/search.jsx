import React from 'react';
import styled from 'styled-components';
import { useLinks } from '../../../../context/links';

const StyledSearch = styled.div`
  padding-top: 20px;
`;

const StyledLabel = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 150%;
  font-weight: 300;
`;

const StyledControl = styled.input`
  padding: 0;
  font-size: inherit;
  border: 1px solid #E7E7E7;
  background-color: #fff;
  color: inherit;
  order: 12;
  padding: 14px 20px;
  line-height: 18px;
  font-weight: 300;
  transition: all 0.3s ease;
  font-weight: 300;

  &::placeholder {
    color: #808080;
    font-weight: 300;
  }
`;

const Search = () => {
  const { searchLabel, setSearchLabel } = useLinks();

  const handleChange = (evt) => {
    setSearchLabel(evt.target.value);
  };

  return (
    <div>
      <StyledSearch>
        <StyledLabel>
          <StyledControl
            name="search"
            type="text"
            placeholder="Поиск по группе..."
            value={searchLabel}
            onChange={handleChange}
          />
        </StyledLabel>
      </StyledSearch>
    </div>
  );
};

export default Search;
