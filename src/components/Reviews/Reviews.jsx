import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  StyledReviewsSection,
  StyledReviewsItem,
  StyledThirdTitle,
  StyledCityText,
  StyledReviewsList,
  StyledRevSecTitle,
  StyledReviewsText,
  StyledReviewsInput,
  StyledTextArea,
  StyledRevThdTitle,
  StyledReviewsForm,
  StyledReviewsBtn,
} from './Reviews.styled';

const Reviews = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    name === 'name' && setName(value);
    name === 'phone' && setPhone(Number(value));
    name === 'comment' && setComment(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    if (name === '' || phone === '' || comment === '') {
      Notify.failure('Заповніть, будь ласка, усі поля');

      return;
    }

    if (isNaN(phone)) {
      Notify.failure('Введіть, будь ласка, правильний номер');

      return;
    }

    console.log({ name, phone, comment });

    setIsSubmit(true);
  };

  return (
    <StyledReviewsSection>
      <StyledRevSecTitle>Відгуки наших покупців</StyledRevSecTitle>
      <StyledReviewsList>
        <StyledReviewsItem>
          <StyledThirdTitle>Юлія Приходько</StyledThirdTitle>
          <StyledCityText>м.Київ</StyledCityText>
          <StyledReviewsText>Дитина в захваті, дякую.</StyledReviewsText>
        </StyledReviewsItem>
        <StyledReviewsItem>
          <StyledThirdTitle>Ярослав Бабик</StyledThirdTitle>
          <StyledCityText>м.Шепетівка</StyledCityText>
          <StyledReviewsText>
            Придбали набір для подарунку. Гарний дерев'яний бокс.
          </StyledReviewsText>
        </StyledReviewsItem>
        <StyledReviewsItem>
          <StyledThirdTitle>Оля Литвинчук</StyledThirdTitle>
          <StyledCityText>м.Кривий Ріг</StyledCityText>
          <StyledReviewsText>
            Малечі найбільше сподобались оці олійні крейди, деякі вже наполовину
            змалювала.
          </StyledReviewsText>
        </StyledReviewsItem>
      </StyledReviewsList>
      {!isSubmit ? (
        <>
          <StyledRevThdTitle>Залишити відгук</StyledRevThdTitle>
          <StyledReviewsForm onSubmit={handleSubmitForm}>
            <StyledReviewsInput
              type="text"
              name="name"
              placeholder="Ім'я"
              onChange={handleChange}
            />
            <StyledReviewsInput
              type="tel"
              name="phone"
              placeholder="Номер телефону"
              onChange={handleChange}
            />
            <StyledTextArea
              name="comment"
              cols="10"
              rows="3"
              placeholder="Коментар"
              onChange={handleChange}
            ></StyledTextArea>
            <StyledReviewsBtn type="submit">Відправити</StyledReviewsBtn>
          </StyledReviewsForm>
        </>
      ) : (
        <StyledRevThdTitle>Дякуємо за відгук!</StyledRevThdTitle>
      )}
    </StyledReviewsSection>
  );
};

export default Reviews;
