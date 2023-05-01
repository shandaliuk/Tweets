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
  const dispatch = useDispatch();

  const savedUsers = useSelector(selectUsers);

  const handleClick = e => {
    if (e.currentTarget.name === 'follow') {
      dispatch(addUser(user));
      checkPage();
      return;
    }
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
            <p>{user.followers.toLocaleString()} followers</p>
          </li>
        </TweetInfo>
        {savedUsers.find(savedUser => savedUser.id === user.id) ? (
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
