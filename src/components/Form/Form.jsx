import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { telegramOrder } from 'api/telegramApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import iconClose from '../../images/form/iconClose.svg';
import {
  StyledInput,
  StyledFormBtn,
  StyledForm,
  StyledIconClose,
} from './Form.styled';

const Form = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    name === 'name' && setName(value);
    name === 'phone' && setPhone(Number(value));
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    if (name === '' || phone === '') {
      Notify.failure('Заповніть, будь ласка, усі поля');

      return;
    }

    if (isNaN(phone)) {
      Notify.failure('Введіть, будь ласка, правильний номер');

      return;
    }

    let message = `Ім'я: ${name}\n`;
    message += `Телефон: ${phone}\n`;

    telegramOrder(message);

    navigate('/thanks');

    closeModal();
  };

  // const reset = () => {
  //   setColor('');
  //   setName('');
  //   setPhone('');
  // };

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <StyledInput
        type="text"
        name="name"
        placeholder="Ім'я"
        onChange={handleChange}
      />
      <StyledInput
        type="tel"
        name="phone"
        placeholder="Номер телефону"
        onChange={handleChange}
      />
      <StyledFormBtn type="submit">Замовити</StyledFormBtn>
      <StyledIconClose src={iconClose} alt="Icon Close" onClick={closeModal} />
    </StyledForm>
  );
};

export default Form;

Form.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
