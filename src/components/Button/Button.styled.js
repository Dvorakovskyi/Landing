import styled from 'styled-components';
import { colors } from 'styles/globalStyles';

export const StyledBtn = styled.button`
  display: block;
  margin: 10px auto;
  padding: 0 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 50px;
  cursor: pointer;

  border: none;
  border-radius: 50px;

  transition: background-color 250ms ease;

  color: ${colors.mainTextColor};
  background-color: ${colors.discountBgColor};

  &:hover,
  &:focus {
    background-color: ${colors.secondaryTextColor};
  }
`;
