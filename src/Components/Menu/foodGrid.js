import styled from 'styled-components';
import {Title} from '../../Styles/title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.82);
  padding: 5px;
  border-radius: 9px;
`;

export const FoodItem = styled.div`
  height: 253px;
  padding: 10px;
  margin: 5px 0 0 0;

  font-size: 21px;

  background-image: ${({img}) => `url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 9px;
  box-shadow: 0 0 2px 0 grey;
  filter: contrast(75%);

  transition: box-shadow 0.1s, margin 0.1s, filter 0.1s;

  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    box-shadow: 0 5px 12px 0 grey;
    margin: 0 0 5px 0;
  }
`;
