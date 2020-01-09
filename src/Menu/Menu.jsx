import React from 'react';

import {MenuStyled} from './menu.style';
import {Food, FoodGridStyle, FoodLabel} from './foodGrid.style';

import {foods} from '../Data/FoodData';
import {formatPrice} from '../Data/FoodData';

export const Menu = ({setOpenFood}) => {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods], i) => (
        <React.Fragment key={i}>
          <h1> {sectionName} </h1>
          <FoodGridStyle>
            {foods.map((food, i) => (
              <Food
                key={i}
                img={food.img}
                onClick={() => {
                  setOpenFood(food);
                }}
              >
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGridStyle>
        </React.Fragment>
      ))}
    </MenuStyled>
  );
};
