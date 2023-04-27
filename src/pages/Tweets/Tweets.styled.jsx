import styled from 'styled-components';

export const TweetsSection = styled.section`
  width: 1200px;
  margin: 30px auto;
  padding-bottom: 64px;
`;

export const HiddenTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`;

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
