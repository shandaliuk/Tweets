import { useState } from 'react';
import { useGetUsersQuery } from 'services/usersApi';
import { HiddenTitle } from './Tweets.styled';

export const Tweets = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetUsersQuery();

  return (
    !isLoading &&
    !isError && (
      <>
        <HiddenTitle>User tweets</HiddenTitle>
      </>
    )
  );
};
