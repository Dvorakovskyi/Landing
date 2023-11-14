import React from 'react';
import {
  StyledReviewsSection,
  StyledReviewsItem,
  StyledThirdTitle,
  StyledCityText,
  StyledReviewsList,
  StyledRevSecTitle,
  StyledReviewsText,
} from './Reviews.styled';

const Reviews = () => {
  return (
    <StyledReviewsSection>
      <StyledRevSecTitle>Відгуки наших покупців</StyledRevSecTitle>
      <StyledReviewsList>
        <StyledReviewsItem>
          <StyledThirdTitle>Юлія Приходько</StyledThirdTitle>
          <StyledCityText>м.Київ</StyledCityText>
          <StyledReviewsText>
            Купувала на подарунок, чоловік залишився дуже задоволений.
          </StyledReviewsText>
        </StyledReviewsItem>
        <StyledReviewsItem>
          <StyledThirdTitle>Ярослав Бабик</StyledThirdTitle>
          <StyledCityText>м.Шепетівка</StyledCityText>
          <StyledReviewsText>
            Користуюсь таким більше року. Гарний інструмент - рекомендую.
          </StyledReviewsText>
        </StyledReviewsItem>
        <StyledReviewsItem>
          <StyledThirdTitle>Дмитро Литвинчук</StyledThirdTitle>
          <StyledCityText>м.Кривий Ріг</StyledCityText>
          <StyledReviewsText>
            Шуруповерт просто вогонь, свої функції виконує на ура, легкий та
            потужний, рекомендую до покупки.
          </StyledReviewsText>
        </StyledReviewsItem>
      </StyledReviewsList>
    </StyledReviewsSection>
  );
};

export default Reviews;
