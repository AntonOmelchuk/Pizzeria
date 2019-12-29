import styled from 'styled-components';
import {FoodLabel} from '../Menu/foodGrid';

export const DialogContainer = styled.div`
  width: 500px;
  height: 500px;
  max-height: calc(100% - 100px);
  position: fixed;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 21;
  background-color: white;
  border-radius: 12px;
`;

export const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({img}) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 12px 12px 0 0;
`;

export const DialogBannerLabel = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

export const DialogOverlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 12;

  background-color: black;
  opacity: 0.72;
`;
