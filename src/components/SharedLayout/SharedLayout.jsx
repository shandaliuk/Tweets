import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Page } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Page>
      <Header />
      <Outlet />
      <Footer />
    </Page>
  );
};
