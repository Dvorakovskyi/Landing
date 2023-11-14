import styled from 'styled-components';
import { StyledRemText } from 'components/Remainder/Remainder.styled';
import { StyledSecTitle } from 'components/Benefits/Benefits.styled';
import { colors } from 'styles/globalStyles';

export const StyledThkSection = styled.section`
  position: relative;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  width: 310px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  background-color: ${colors.oldPriceBgColor};
  /* background-image: url('https://i.pinimg.com/564x/01/c8/a2/01c8a2cf6b78cd914eb10ef13360f5cd.jpg'); */
`;

export const StyledThkTitle = styled(StyledSecTitle)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 310px;

  color: ${colors.mainTextColor};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledThkText = styled(StyledRemText)`
  margin: 5px;
  width: 310px;
  font-size: 16px;
  text-align: center;
  font-weight: 500;

  color: ${colors.secondaryTextColor};
  /* background-color: rgba(0, 0, 0, 0.5); */

  &::after {
    content: '';
    display: block;
    margin-top: 30px;
    width: 310px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export const StyledThkBtn = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  border: none;
  border-radius: 25px;

  color: ${colors.mainTextColor};
  background-color: rgba(0, 0, 0, 0.5);
`;
