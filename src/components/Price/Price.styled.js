import styled from 'styled-components';
import { colors } from 'styles/globalStyles';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  min-width: 320px;
  max-width: 480px;
`;

export const StyledOldPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 50px 10px 0;
  width: 100%;

  background-color: ${colors.oldPriceBgColor};
`;

export const StyledNewPrice = styled(StyledOldPrice)`
  padding: 10px 0 10px 50px;
  background-color: ${colors.newPriceBgColor};
`;

export const StyledDiscount = styled.div`
  position: absolute;
  top: -5px;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 10px;
  height: 79px;
  transform: translateX(-50%);

  background-color: ${colors.discountBgColor};
`;

export const StyledDiscText = styled.p`
  margin-bottom: 5px;
  width: 65px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: 8px;
  text-align: center;

  color: ${colors.mainTextColor};
`;

export const StyledDiscNumber = styled.p`
  font-weight: 700;
  font-size: 34px;
  line-height: 34px;
  text-align: center;

  color: ${colors.mainTextColor};
`;

export const StyledPriceText = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
`;

export const StyledPrice = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
`;

export const StyledPriceLine = styled(StyledPrice)`
  text-decoration: line-through;
`;
