import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  padding: 20px 30px;
`;

export const PageNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinksList = styled.ul`
  display: flex;
  column-gap: 30px;
`;

export const HeaderLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  &.active {
    color: ${props => props.theme.colors.accent};
  }
`;
