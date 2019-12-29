import {useState} from 'react';

const useQuantity = () => {
  const [value, setValue] = useState(1);

  const onChange = e => {
    if (!(+e.target.value >= 0)) {
      setValue(1);
      return;
    }

    setValue(+e.target.value);
  };

  return {
    value,
    setValue,
    onChange,
  };
};

export default useQuantity;
