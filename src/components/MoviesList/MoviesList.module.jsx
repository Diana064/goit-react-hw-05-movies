import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UlList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
`;
export const LiStyle = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  color: black;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 18px;
  :hover,
  :focus {
    color: #0d25ea;
  }
`;
