import { PageFooter, FooterText, FooterLink } from './Footer.styled';

export const Footer = () => {
  return (
    <PageFooter>
      <FooterText>
        Developed by{' '}
        <FooterLink to="https://github.com/shandaliuk" target="_blank">
          shandaliuk
        </FooterLink>
      </FooterText>
    </PageFooter>
  );
};
