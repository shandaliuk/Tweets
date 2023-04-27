import { useGetUsersQuery } from 'services/usersApi';
import { TweetCard } from 'TweetCard/TweetCard';
import {
  TweetsSection,
  HiddenTitle,
  TweetsList,
  TweetsListItem,
} from './Tweets.styled';

export const Tweets = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();

  return (
    !isLoading &&
    !isError && (
      <main>
        <TweetsSection>
          <HiddenTitle>User tweets</HiddenTitle>
          <TweetsList>
            {users.map(user => (
              <TweetsListItem key={user.id}>
                <TweetCard user={user} />
              </TweetsListItem>
            ))}
          </TweetsList>
        </TweetsSection>
      </main>
    )
  );
};
