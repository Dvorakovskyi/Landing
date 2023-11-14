import styled from 'styled-components';
import { colors } from 'styles/globalStyles';

export const StyledTimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0;

  background-color: ${colors.mainBgColor};
`;

export const StyleTimerText = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;

  color: #99958b;
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledTimerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledWrapperSpan = styled.div`
  display: flex;
  padding: 20px 15px;
  margin-bottom: 10px;

  border-radius: 6px;
  background-color: ${colors.newPriceBgColor};
`;

export const StyledTimerSpan = styled.span`
  font-size: 44px;
  font-weight: 500;

  color: ${colors.secondaryTextColor};
`;
