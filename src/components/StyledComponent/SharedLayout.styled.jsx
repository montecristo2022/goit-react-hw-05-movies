import styled from 'styled-components';
 import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`

font-size: 20px;
padding-right: 20px;
padding-left: 20px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: grey;
  }
`
export const Header = styled.header`
display: flex;
padding-top: 15px;
padding-bottom: 15px;
margin-bottom: 20px;
justify-content: center;
border-bottom: 1px black solid;
`

