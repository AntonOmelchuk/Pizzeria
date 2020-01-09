import React from 'react';

import {Label, RadioInput} from './choice.style';

export const Choices = ({openFood, choiceRadio}) => (
  <>
    <h3>Choose one</h3>
    {openFood.choices.map((choice, i) => (
      <React.Fragment key={i}>
        <RadioInput
          type='radio'
          id={choice}
          name='choice'
          value={choice}
          checked={choiceRadio.value === choice}
          onChange={choiceRadio.onChange}
        />
        <Label htmlFor={choice}> {choice} </Label>{' '}
      </React.Fragment>
    ))}
  </>
);
