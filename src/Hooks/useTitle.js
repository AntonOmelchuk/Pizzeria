import {useEffect} from 'react';

const useTitle = ({openFood}) => {
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      document.title = 'RockIt Pizza';
    }
  });
};

export default useTitle;
