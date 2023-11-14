import styled from 'styled-components';
import { colors } from 'styles/globalStyles';
import { StyledSection } from 'components/Description/Description.styled';
import { StyledSecTitle } from 'components/Benefits/Benefits.styled';
import { StyledInput } from 'components/Form/Form.styled';

export const StyledReviewsSection = styled(StyledSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  background-color: ${colors.mainBgColor};
`;

export const StyledRevSecTitle = styled(StyledSecTitle)`
  margin-bottom: 15px;

  color: ${colors.mainTextColor};
`;

export const StyledReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const StyledReviewsItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  width: 330px;
  list-style: none;
  border-radius: 20px;

  background-color: ${colors.oldPriceBgColor};
`;

export const StyledThirdTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;

  color: ${colors.secondaryTextColor};
`;

export const StyledCityText = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;

  color: ${colors.secondaryTextColor};
`;

export const StyledReviewsText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;

  color: ${colors.secondaryTextColor};
`;

export const StyledReviewsForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const StyledReviewsInput = styled(StyledInput)`
  padding: 5px 5px 5px 10px;
  margin-bottom: 5px;
  width: 160px;
  font-size: 12px;
`;

export const StyledTextArea = styled.textarea`
  padding: 5px 5px 5px 10px;
  margin-bottom: 5px;
  font-size: 12px;
  border-radius: 10px;
  border: 2px solid ${colors.secondaryTextColor};
  outline: none;

  &:focus {
    border: 2px solid ${colors.focusColor};
  }
`;

export const StyledRevThdTitle = styled(StyledSecTitle)`
  margin-bottom: 5px;
  font-size: 20px;

  color: ${colors.mainTextColor};
`;

export const StyledReviewsBtn = styled.button`
  padding: 3px 10px;
  width: 80px;
  font-size: 12px;

  border: none;
  border-radius: 10px;
  background-color: ${colors.mainTextColor};
`;
