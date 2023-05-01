import styled from 'styled-components';
import comments from 'images/comments.png';

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: ${props => props.theme.shadows.card};
`;

export const CardTop = styled.div`
  position: relative;
  height: 222px;
  padding: 28px 36px 18px 36px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 8px;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.border};
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${comments});
  background-repeat: no-repeat;
`;

export const CardBottom = styled.div`
  padding: 62px 36px 36px 36px;
`;

export const CardLogo = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  opacity: 0.3;
  color: ${props => props.theme.colors.primary};
`;

export const CardUserPhotoWrapper = styled.div`
  position: absolute;
  top: 214px;
  right: 50%;
  transform: translate(50%, -50%);
  width: 80px;
  height: 80px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.border};
`;

export const CardUserImage = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  box-shadow: ${props => props.theme.shadows.invertBorder};
`;

export const TweetInfo = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;

export const FollowButton = styled.button`
  display: block;
  margin: 26px auto 0 auto;
  min-width: 196px;
  height: 50px;
  padding: 14px 39px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.buttonText};
  box-shadow: ${props => props.theme.shadows.button};
  transition: background-color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
  }

  &.following {
    background-color: ${props => props.theme.colors.accent};

    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.primary};
    }
  }
`;
