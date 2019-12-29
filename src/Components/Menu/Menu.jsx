import React from 'react';
import {MenuContainer} from './menu.style';
import {foodItems} from './dataFood';
import {FoodItem, FoodGrid, FoodLabel} from './foodGrid';

const Menu = () => {
  return (
    <MenuContainer>
      <h1>Menu</h1>
      <FoodGrid>
        {foodItems.map(food => (
          <FoodItem key={food.name} img={food.img}>
            <FoodLabel>{food.name}</FoodLabel>
          </FoodItem>
        ))}
      </FoodGrid>
    </MenuContainer>
  );
};

export default Menu;
