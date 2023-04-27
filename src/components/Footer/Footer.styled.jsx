import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageFooter = styled.footer`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%);
  padding: 20px 0;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
`;

export const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.accent};
`;
