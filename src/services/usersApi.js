import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63b7f4016f4d5660c6c6ef49.mockapi.io/',
  }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => `users`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
