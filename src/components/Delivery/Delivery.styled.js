import styled from "styled-components";
import { colors } from "styles/globalStyles";

export const StyledDeliveryTittle = styled.h3`
    font-size: 18px;
    color: ${colors.secondaryTextColor};
`;
export const StyledDeliveryList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0;
`;

export const StyledDeliveryItem = styled.li`
    padding: 10px;
    width: 140px;
    height: 140px;
    list-style: none;

    border-radius: 6px;
    background-color: ${colors.oldPriceBgColor};
`;