import styled from 'styled-components';
import { colors } from 'styles/globalStyles';
import { StyledSection } from 'components/Description/Description.styled';
import { StyledSecTitle } from 'components/Benefits/Benefits.styled';

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
