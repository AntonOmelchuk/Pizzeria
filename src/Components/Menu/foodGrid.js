import styled from 'styled-components';
import {Title} from '../../Styles/title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.82);
  padding: 5px;
  border-radius: 9px;
`;

export const FoodItem = styled(Title)`
  height: 153px;
  padding: 10px;

  font-size: 21px;

  background-image: ${({img}) => `url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 9px;
  box-shadow: -7px -7px 10px 0 grey;
  filter: contrast(75%);

  &:hover {
    cursor: pointer;
    opacity: 0.72;
  }
`;
