import { LogoLink, LogoIcon } from './Logo.styled';
import logo from 'images/logo.svg';

export const Logo = () => {
  return (
    <LogoLink>
      <LogoIcon>
        <use href={logo + '#logo'}></use>
      </LogoIcon>
    </LogoLink>
  );
};
