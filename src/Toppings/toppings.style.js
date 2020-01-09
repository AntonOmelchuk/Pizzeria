import styled from 'styled-components';

export const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
`;
