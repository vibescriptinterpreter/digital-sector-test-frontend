import React from 'react';
import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';
import LinkList from './components/list';
import LinksNav from './components/nav';
import Form from './components/form';
import Search from './components/search';
import { useLinks } from '../../context/links';

const StyledLinksDashboardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
`;

const StyledLinksDashboard = styled.div`
  position: relative;
  padding: 3.5em 2em 2em;
  box-shadow: 0px 0px 0px 1px #dddddd;
`;

const StyledLinksDashboardHead = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between; 
  padding: .8em .8em;
  font-size: 18px;
  font-weight: 600;
  border-radius: .21428571rem .21428571rem 0 0;
  background-color: #F8F8F8;
  border-bottom: 1px solid #dddddd;
  color: rgba(0, 0, 0, 0.6);
`;

const StyledLinksDashboardBody = styled.div`
  padding-top: 20px;
`;

const StyledNewLinkButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  user-select: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const LinksDashboard = () => {
  const { setNewLinkPopupOpen } = useLinks();

  return (
    <StyledLinksDashboardWrap>
      <LinksNav />
      <StyledLinksDashboard>
        <StyledLinksDashboardHead>
          Список ссылок
          <StyledNewLinkButton onClick={() => setNewLinkPopupOpen(true)} type="button" aria-label="Добавить ссылку" tite="Добавить ссылку">
            <AiFillPlusCircle size="30px" />
          </StyledNewLinkButton>
        </StyledLinksDashboardHead>
        <Search />
        <StyledLinksDashboardBody>
          <LinkList />
        </StyledLinksDashboardBody>
      </StyledLinksDashboard>
      <Form />
    </StyledLinksDashboardWrap>
  );
};

export default LinksDashboard;
