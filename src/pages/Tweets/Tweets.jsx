import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactDropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { selectUsers } from 'redux/usersSlice/selectors';
import { useGetUsersQuery } from 'services/usersApi';
import { TweetsUsersList } from 'components/TweetsUsersList/TweetsUsersList';
import { TweetsSection, HiddenTitle } from './Tweets.styled';

export const Tweets = () => {
  const [category, setCategory] = useState('show all');

  const { data: users, isLoading, isError } = useGetUsersQuery();

  const savedUsers = useSelector(selectUsers);

  useEffect(() => {});

  const options = ['show all', 'follow', 'followings'];

  const defaultOption = category;

  const handleChange = event => {
    setCategory(event.value);
  };

  const filterUsers = () => {
    return users.filter(user => {
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
        return users;
      case 'follow':
        return filterUsers();
      case 'followings':
        return savedUsers;
      default:
        return [];
    }
  };

  return (
    !isLoading &&
    !isError && (
      <main>
        <TweetsSection>
          <HiddenTitle>User tweets</HiddenTitle>
          <ReactDropdown
            options={options}
            onChange={handleChange}
            value={defaultOption}
            placeholder="Select an option"
          />
          <TweetsUsersList users={categorizeUsers()} category={category} />
        </TweetsSection>
      </main>
    )
  );
};
