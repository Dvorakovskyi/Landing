import styled from 'styled-components';
import { colors } from 'styles/globalStyles';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 10px 20px;
  margin-bottom: 10px;
  font-size: 14px;
  border-radius: 20px;
  border: 2px solid ${colors.secondaryTextColor};
  outline: none;

  &:focus {
    border: 2px solid ${colors.focusColor};
  }
`;

export const StyledSelect = styled.select`
  padding: 10px 20px;
  margin-bottom: 10px;
  font-size: 14px;
  border-radius: 20px;
  border: 2px solid ${colors.secondaryTextColor};
  outline: none;

  &:focus {
    border: 2px solid ${colors.focusColor};
  }
`;

export const StyledFormBtn = styled.button`
  display: block;
  margin: 20px auto 0 auto;
  padding: 10px 30px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;

  border: none;
  border-radius: 50px;

  transition: background-color 250ms ease;

  color: ${colors.mainTextColor};
  background-color: ${colors.secondaryTextColor};

  &:hover,
  &:focus {
    background-color: ${colors.focusColor};
  }
`;

export const StyledIconClose = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
