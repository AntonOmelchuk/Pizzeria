import {useState} from 'react';

export const useChoice = defaultChoice => {
  const [choice, setChoice] = useState(defaultChoice);

  const onChange = e => setChoice(e.target.value);

  return {
    choice,
    onChange,
  };
};
