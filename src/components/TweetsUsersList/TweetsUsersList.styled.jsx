import styled from 'styled-components';

export const TweetsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
`;

export const TweetsListItem = styled.li`
  width: 380px;
  height: 460px;
`;

export const EmptyTitle = styled.h2`
  font-size: 34px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  margin: auto;
`;
