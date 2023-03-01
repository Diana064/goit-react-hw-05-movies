import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperContext = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  width: 75px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #0d25ea;
  text-align: center;

  &.active {
    color: #0d25ea;
    background-color: #0000ff42;
  }
`;
