import React from 'react';
import Form from 'components/Form/Form';
import PropTypes from 'prop-types';
import { StyledBackdrop, StyledModal } from './Modal.styled';

const Modal = ({ closeModal }) => {
  const handleModalClick = event => {
    event.stopPropagation();
  };

  return (
    <StyledBackdrop onClick={closeModal}>
      <StyledModal onClick={handleModalClick}>
        <Form closeModal={closeModal} />
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
