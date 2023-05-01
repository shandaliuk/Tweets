import { TweetCard } from 'components/TweetCard/TweetCard';
import {
  TweetsList,
  TweetsListItem,
  EmptyTitle,
} from './TweetsUsersList.styled';
export const TweetsUsersList = ({ users, category, setPage }) => {
  const checkPage = () => {
    if (users.length === 1) {
      setPage(state => (state += 1));
    }
  };
  return (
    <TweetsList>
      {users.length <= 0 ? (
        <EmptyTitle>Add users to your {category} list</EmptyTitle>
      ) : (
        users.map(user => (
          <TweetsListItem key={user.id}>
            <TweetCard user={user} checkPage={checkPage} category={category} />
          </TweetsListItem>
        ))
      )}
    </TweetsList>
  );
};
