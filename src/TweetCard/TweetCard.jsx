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

export const TweetCard = ({ user, category }) => {
  const dispatch = useDispatch();

  const savedUsers = useSelector(selectUsers);

  const handleClick = () => {
    dispatch(addUser(user));
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
        {category === 'show all' &&
        savedUsers.find(savedUser => savedUser.id === user.id) ? (
          <FollowButton type="button" name="follow" onClick={handleClick}>
            Follow
          </FollowButton>
        ) : (
          <FollowButton type="button" name="unfollow" onClick={handleClick}>
            Following
          </FollowButton>
        )}
        {category === 'follow' && (
          <FollowButton type="button" name="follow" onClick={handleClick}>
            Follow
          </FollowButton>
        )}
        {category === 'following' && (
          <FollowButton type="button" name="unfollow" onClick={handleClick}>
            Following
          </FollowButton>
        )}
      </CardBottom>
    </Card>
  );
};
