import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import 'react-dropdown/style.css';
import { selectUsers } from 'redux/usersSlice/selectors';
import { useGetUsersQuery } from 'services/usersApi';
import { TweetsUsersList } from 'components/TweetsUsersList/TweetsUsersList';
import {
  TweetsSection,
  Dropdown,
  HiddenTitle,
  MessageHeading,
  LoadMoreButton,
} from './Tweets.styled';

export const Tweets = () => {
  const [category, setCategory] = useState('show all');

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(3);

  const [usersToShow, setUsersToShow] = useState([]);

  const { data: users, isLoading, isError } = useGetUsersQuery({ page, limit });

  useEffect(() => {
    if (!isLoading && !isError && users?.length > 0) {
      setUsersToShow(state => [...state, ...users]);
    }
  }, [users, isLoading, isError]);

  const savedUsers = useSelector(selectUsers);

  const options = ['show all', 'follow', 'followings'];

  const defaultOption = category;

  const handleChange = event => {
    setCategory(event.value);
  };

  const filterUsers = () => {
    return usersToShow.filter(user => {
      const currentUser = savedUsers.find(savedUser => {
        return savedUser.id === user.id;
      });
      if (!currentUser) {
        return true;
      }
      return false;
    });
  };

  const categorizeUsers = () => {
    switch (category) {
      case 'show all':
        setLimit(3);
        return usersToShow;
      case 'follow':
        setLimit(12);
        return filterUsers();
      case 'followings':
        return savedUsers;
      default:
        return [];
    }
  };

  const onLoadMoreClick = () => {
    setPage(state => (state += 1));
  };

  return (
    !isLoading &&
    !isError && (
      <main>
        <TweetsSection>
          <HiddenTitle>User tweets</HiddenTitle>
          <Dropdown
            options={options}
            onChange={handleChange}
            value={defaultOption}
            placeholder="Select list"
            className="dropdown"
          />
          <TweetsUsersList
            users={categorizeUsers()}
            category={category}
            setPage={setPage}
          />
          {users.length > 0 ? (
            <LoadMoreButton type="button" onClick={onLoadMoreClick}>
              Load more
            </LoadMoreButton>
          ) : (
            <MessageHeading>You've reached the end</MessageHeading>
          )}
        </TweetsSection>
      </main>
    )
  );
};
