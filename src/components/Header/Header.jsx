import { Logo } from 'components/Logo/Logo';
import {
  PageHeader,
  PageNavigation,
  HeaderLink,
  NavLinksList,
} from './Header.styled';

export const Header = () => {
  return (
    <PageHeader>
      <PageNavigation>
        <Logo />
        <NavLinksList>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/tweets">Tweets</HeaderLink>
          </li>
        </NavLinksList>
      </PageNavigation>
    </PageHeader>
  );
};
