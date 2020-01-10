import styled from 'styled-components';
import {Title} from '../Styles/title';
import {pizzaRed} from '../Styles/colors';
import {FoodLabel} from '../Menu/foodGrid.style';

export const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 12;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0 40px 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
  ${({disabled}) =>
    disabled &&
    `
    opacity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 12;
`;

export const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({img}) => (img ? `background-image: url(${img});` : `min-height: 75px;`)};
  background-position: center;
  background-size: cover;
`;

export const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({img}) => (img ? `100px` : `20px`)};
`;
