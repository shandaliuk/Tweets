import {
  HomeSection,
  HomeHeading,
  HomeOverview,
  HomeLink,
} from './Home.styled';

export const Home = () => {
  return (
    <main>
      <HomeSection>
        <HomeHeading>Welcome to the Tweets!</HomeHeading>
        <HomeOverview>A service to see tweets</HomeOverview>
        <HomeLink to="tweets">Take a look</HomeLink>
      </HomeSection>
    </main>
  );
};
