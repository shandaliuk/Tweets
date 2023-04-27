import styled from 'styled-components';
import comments from 'images/comments.png';

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 36px 28px 36px 36px;
  background-color: ${props => props.theme.colors.secondary};
`;

export const CardTop = styled.div`
  background-image: url(${comments});
  background-repeat: no-repeat;
  height: 186px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 8px;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.border};
  }
`;

export const CardBottom = styled.div`
  height: 202px;
`;

export const CardLogo = styled.svg`
  width: 76px;
  height: 22px;
  position: absolute;
  top: 20px;
  left: 20px;

  color: ${props => props.theme.colors.primary};
  opacity: 0.3;
`;

export const CardUserImage = styled.img`
  width: 62px;
  height: 62px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 50%;
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 8px;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.border};
  }
`;
