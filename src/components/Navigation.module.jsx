import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px;
  font-size: 25px;
  margin: 10px;
  position: sticky;
  top: 10px;
  z-index: 10;
  background-color: white;
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 50%);
`;
export const StyledLink = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  &.active {
    color: #0d25ea;
    background-color: #0000ff42;
  }
`;
