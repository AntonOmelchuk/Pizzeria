import React from 'react';

const DrinksChoice = ({openFood, choiceDrink}) => {
  return (
    <>
      <h3>Choose one</h3>
      {openFood.choices.map(choice => (
        <>
          <input
            type='radio'
            id={choice}
            name='choice'
            value={choice}
            checked={choiceDrink.choice === choice}
            onChange={choiceDrink.onChange}
          />
          <label htmlFor={choice}>{choice} </label>
        </>
      ))}
    </>
  );
};

export default DrinksChoice;
