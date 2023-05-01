import ReactDropdown from 'react-dropdown';
import styled from 'styled-components';

export const TweetsSection = styled.section`
  width: 1200px;
  margin: 30px auto;
  padding-bottom: 64px;
`;

export const Dropdown = styled(ReactDropdown)`
  .Dropdown-control {
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 20px;
    color: ${props => props.theme.colors.primary};
    transition: all ${props => props.theme.transitions.main};
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  .Dropdown-control:hover {
    box-shadow: ${props => props.theme.shadows.invertBorder};
  }

  .Dropdown-arrow {
    border-color: ${props => props.theme.colors.primary} transparent transparent;
  }

  .is-open .Dropdown-arrow {
    border-color: transparent transparent ${props => props.theme.colors.primary};
  }

  .Dropdown-menu {
    background-color: ${props => props.theme.colors.secondary};
    border: 3px solid ${props => props.theme.colors.accent};
    border-radius: 20px;
  }

  .Dropdown-option {
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
    text-transform: uppercase;
  }

  .Dropdown-option:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.secondary};
  }

  .Dropdown-option.is-selected {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.secondary};
  }
`;

export const HiddenTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`;

export const MessageHeading = styled.h3`
  margin-top: 20px;
  width: 500;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.accent};
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 26px auto 0 auto;
  min-width: 196px;
  height: 50px;
  padding: 14px 39px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.button};
  transition: background-color ${props => props.theme.transitions.main},
    color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.buttonText};
  }
`;
