import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';
import Popup from '../../../popup';
import { useLinks } from '../../../../context/links';
import uniqueId from '../../../../helpers/uniqueId';

const StyledForm = styled.form`

`;

const StyledInput = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
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

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  user-select: none;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  cursor: ${function bg(props) { return props.isDisabled ? 'initial' : 'pointer'; }};
  color: inherit;
  text-align: center;
  text-decoration-line: none;
  background-color: transparent;
  transition: color .1s ease-in, background-color .1s ease-in;
  background-color: ${function bg(props) { return props.isDisabled ? 'grey' : '#000'; }};
  border-color: ${function bg(props) { return props.isDisabled ? 'grey' : '#000'; }};
  color: ${function bg(props) { return props.isDisabled ? 'grey' : '#000'; }};
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  min-height: 52px;
  padding: 12px 20px;

  &:hover, &:focus {
    background-color: ${function bg(props) { return props.isDisabled ? 'grey' : '#202020'; }};
    color: ${function bg(props) { return props.isDisabled ? 'grey' : '#202020'; }};
  }

  &:active {
    background-color: ${function bg(props) { return props.isDisabled ? 'grey' : '#000'; }};
    color: ${function bg(props) { return props.isDisabled ? 'grey' : '#000'; }};
  }


  &:hover, &:focus {
    color: inherit;
    text-decoration-line: none;
  }
`;

const StyledButtonText = styled.span`
  text-overflow: ellipsis;
  transition: color .1s ease-in;
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 300;
`;

const StyledInputValidationMessage = styled.span`
  color: red;
  font-size: 14px;
`;

const Form = () => {
  const firstRender = useRef(true);
  const [disabled, setDisabled] = useState(true);

  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [categoryLabel, setCategoryLabel] = useState('packagist');
  const [nameError, setNameError] = useState(null);
  const [linkError, setLinkError] = useState(null);
  const [categoryLabelError, setCategoryLabelError] = useState(null);

  const { categories, setNewLinkPopupOpen, addNewLink } = useLinks();

  const validateForm = () => {
    if (!name) {
      setNameError('Введите название');
      return true;
    }
    if (!link) {
      setLinkError('Введите ссылку');
      return true;
    }

    if (!categoryLabel) {
      setCategoryLabelError('Выберите группу');
      return true;
    }

    setLinkError(null);
    setNameError(null);
    setCategoryLabelError(null);
    return false;
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setDisabled(validateForm());
  }, [name, link]);

  const handleSubmit = (evt) => {
    const newLink = {
      id: uniqueId(),
      name,
      link,
      category: categoryLabel,
      elected: false,
    };

    evt.preventDefault();
    setName('');
    setLink('');
    addNewLink(newLink);
    setNewLinkPopupOpen(false);
  };

  const handleDropdown = (evt, result) => {
    const { value } = result || evt.target;
    setCategoryLabel(value);
  };

  return (
    <Popup>
      <StyledForm onSubmit={handleSubmit} action="/" method="post">
        <StyledInput>
          <StyledLabel>
            { /* eslint-disable-next-line react/jsx-no-duplicate-props  */ }
            <StyledControl name="name" placeholder="*НАЗВАНИЕ" value={name} onChange={(evt) => setName(evt.target.value)} />
          </StyledLabel>
          <StyledInputValidationMessage>
            {nameError}
          </StyledInputValidationMessage>
        </StyledInput>
        <StyledInput>
          <StyledLabel>
            <StyledControl name="link" placeholder="*АДРЕС ССЫЛКИ" value={link} onChange={(evt) => setLink(evt.target.value)} />
          </StyledLabel>
          <StyledInputValidationMessage>
            {linkError}
          </StyledInputValidationMessage>
        </StyledInput>
        { /* eslint-disable-next-line no-unused-vars */ }
        <Dropdown onChange={handleDropdown} value={categoryLabel} options={categories} selection style={{ width: '100%', marginBottom: '20px', padding: '14px 20px' }} />
        <StyledInputValidationMessage>
          {categoryLabelError}
        </StyledInputValidationMessage>
        <StyledButton type="submit" disabled={disabled} isDisabled={disabled}>
          <StyledButtonText>
            Создать запись
          </StyledButtonText>
        </StyledButton>
      </StyledForm>
    </Popup>
  );
};

export default Form;
