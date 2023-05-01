import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/usersSlice/selectors';
import { addUser, deleteUser } from 'redux/usersSlice/usersSlice';
import logo from 'images/logo.svg';
import {
  Card,
  CardTop,
  CardBottom,
  CardWrapper,
  CardLogo,
  CardUserPhotoWrapper,
  CardUserImage,
  TweetInfo,
  FollowButton,
} from './TweetCard.styled';

export const TweetCard = ({ user, checkPage }) => {
  const savedUsers = useSelector(selectUsers);

  const [isFollowed, setFollowing] = useState(() => {
    return savedUsers.find(savedUser => savedUser.id === user.id);
  });

  const dispatch = useDispatch();

  const handleClick = e => {
    if (e.currentTarget.name === 'follow') {
      setFollowing(true);
      dispatch(addUser(user));
      checkPage();
      return;
    }
    setFollowing(false);
    dispatch(deleteUser(user.id));
  };

  return (
    <Card>
      <CardTop>
        <CardWrapper>
          <CardLogo>
            <use href={logo + '#logo'}></use>
          </CardLogo>
        </CardWrapper>
      </CardTop>
      <CardBottom>
        <CardUserPhotoWrapper>
          <CardUserImage src={user.avatar} alt={user.name} />
        </CardUserPhotoWrapper>
        <TweetInfo>
          <li>
            <p>{user.tweets} tweets</p>
          </li>
          <li>
            <p>
              {isFollowed
                ? ({ ...user }.followers += 1).toLocaleString()
                : { ...user }.followers.toLocaleString()}{' '}
              followers
            </p>
          </li>
        </TweetInfo>
        {isFollowed ? (
          <FollowButton
            type="button"
            name="unfollow"
            onClick={handleClick}
            className="following"
          >
            Following
          </FollowButton>
        ) : (
          <FollowButton type="button" name="follow" onClick={handleClick}>
            Follow
          </FollowButton>
        )}
      </CardBottom>
    </Card>
  );
};
