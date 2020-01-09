import styled from 'styled-components';

import {Title} from '../Styles/title';

export const FoodGridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
`;

export const Food = styled.div`
 height: 252px; 
 padding: 10px; 
 margin-top: 5px; 
 
 font-size: 20px; 
 
 background-image: ${({img}) => `url(${img});`} 
 background-position: center;
 background-size: cover;
 filter: contrast(75%); 
 border-radius: 7px; 
 box-shadow: 0 0 2px 0 grey;
 
 transition-property: box-shadow, margin-top, margin-bottom, filter; 
 transition-duration: .1s; 
 
 &:hover {
  cursor: pointer; 
  filter: contrast(100%); 
  margin-top: 0; 
  margin-bottom: 5px; 
  box-shadow: 0 5px 10px 0 grey;
 }
`;
