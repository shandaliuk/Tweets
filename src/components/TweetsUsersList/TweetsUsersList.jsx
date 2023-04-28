import { TweetCard } from 'TweetCard/TweetCard';
import { TweetsList, TweetsListItem } from './TweetsUsersList.styled';

export const TweetsUsersList = ({ users, category }) => {
  return (
    <TweetsList>
      {users.map(user => (
        <TweetsListItem key={user.id}>
          <TweetCard user={user} category={category} />
        </TweetsListItem>
      ))}
    </TweetsList>
  );
};
