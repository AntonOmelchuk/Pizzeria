import React from 'react';
import {MenuContainer} from './menu.style';
import {foods} from './dataFood';
import {FoodItem, FoodGrid, FoodLabel} from './foodGrid';

const Menu = ({setOpenFood}) => {
  return (
    <MenuContainer>
      {Object.entries(foods).map(([section, foods]) => (
        <>
          <h1>{section}</h1>
          <FoodGrid>
            {foods.map(food => (
              <FoodItem
                key={food.name}
                img={food.img}
                onClick={() => setOpenFood(food)}
              >
                <FoodLabel>{food.name}</FoodLabel>
              </FoodItem>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuContainer>
  );
};

export default Menu;
