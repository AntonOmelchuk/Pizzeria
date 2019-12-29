import React from 'react';
import {MenuContainer} from './menu.style';
import {foods, formatPrice} from './dataFood';
import {FoodItem, FoodGrid, FoodLabel} from './foodGrid';

const Menu = ({setOpenFood}) => {
  return (
    <MenuContainer>
      {Object.entries(foods).map(([section, foods], index) => (
        <React.Fragment key={index}>
          <h1>{section}</h1>
          <FoodGrid>
            {foods.map(food => (
              <FoodItem
                img={food.img}
                key={food.id}
                onClick={() => setOpenFood(food)}
              >
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </FoodItem>
            ))}
          </FoodGrid>
        </React.Fragment>
      ))}
    </MenuContainer>
  );
};

export default Menu;
