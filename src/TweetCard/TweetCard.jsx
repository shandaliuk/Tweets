import logo from 'images/logo.svg';
import {
  Card,
  CardTop,
  CardBottom,
  CardLogo,
  CardUserImage,
} from './TweetCard.styled';

export const TweetCard = ({ user }) => {
  console.log(user);
  return (
    <Card>
      <CardTop>
        <CardLogo>
          <use href={logo + '#logo'}></use>
        </CardLogo>
      </CardTop>
      <CardBottom>
        <CardUserImage src={user.avatar} alt={user.name} />
        <p>{user.tweets}</p>
        <p>{user.followers}</p>
        <button type="button">Follow</button>
      </CardBottom>
    </Card>
  );
};
