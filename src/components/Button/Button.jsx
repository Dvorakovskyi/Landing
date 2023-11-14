import React from 'react';
import PropTypes from 'prop-types';
import { StyledBtn } from './Button.styled';

const Button = ({ openModal }) => {
  return (
    <StyledBtn type="button" onClick={openModal}>
      Замовити зі знижкою
    </StyledBtn>
  );
};

export default Button;

Button.propTypes = {
  openModal: PropTypes.func.isRequired,
};
