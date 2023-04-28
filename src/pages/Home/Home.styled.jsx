import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeSection = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const HomeHeading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 45px;
`;

export const HomeOverview = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 30px;
`;

export const HomeLink = styled(Link)`
  width: 196px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 39px;
  margin: 0 auto;
  box-shadow: ${props => props.theme.shadows.button};
  border-radius: 10px;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  transition: background-color ${props => props.theme.transitions.main},
    color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.buttonText};
  }
`;
