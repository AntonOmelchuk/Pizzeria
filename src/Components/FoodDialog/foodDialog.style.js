import styled from 'styled-components';
import {FoodLabel} from '../Menu/foodGrid';
import {CustomButton} from '../../Styles/customButton';

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
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

export const DialogContent = styled.div`
  min-height: 100px;
  padding: 0 40px 80px;
  overflow: auto;
`;

export const DialogFooter = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  box-shadow: 0 -4px 6px 0 grey;
`;

export const ConfirmButton = styled(CustomButton)``;

export const DialogOverlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 12;

  background-color: black;
  opacity: 0.72;
`;
