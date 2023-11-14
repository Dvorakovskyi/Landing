import styled from 'styled-components';
import { colors } from 'styles/globalStyles';
import { StyledBtn } from 'components/Button/Button.styled';
import { StyledItem } from 'components/Benefits/Benefits.styled';

export const StyledAdditWrapper = styled.div`
  margin-top: 40px;
`;

export const StyledImgWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledAdditImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const StyledRightImg = styled.img`
  width: 100px;
  height: 95px;
`;

export const StyledRigthImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledAdditTittle = styled.h2`
  width: 310px;
  /* margin-bottom: 20px; */
  font-size: 16px;
  text-align: center;

  color: ${colors.mainTextColor};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledNameWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const StyledName = styled.p`
  padding: 0 10px;
  font-size: 16px;
  font-weight: 500;

  border-radius: 25px;
  background-color: ${colors.newPriceBgColor};
`;

export const StyledChar = styled.p`
  display: block;
  padding: 5px 10px;
  margin-top: 5px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;

  border-radius: 25px;
  color: black;
  background-color: ${colors.newPriceBgColor};
`;

export const StyledAdditBtn = styled(StyledBtn)`
  padding: 7px 50px;
  font-size: 14px;
  line-height: 1.1;

  border-radius: 25px;
`;

export const StyledAdditList = styled.ul`
  padding: 0;
`;

export const StyledAdditItem = styled.li`
  list-style: none;
`;

export const StyledCharList = styled.ul`
  padding-left: 80px;
  margin-top: 5px;
`;

export const StyledCharItem = styled(StyledItem)`
  margin: 0;
  font-size: 14px;
`;
