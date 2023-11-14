import React from 'react';
import PropTypes from 'prop-types';
import FirstAdditionalForm from './FirstAdditionalForm';
import { StyledModal, StyledBackdrop } from 'components/Modal/Modal.styled';

const FirstAdditionalModal = ({ closeModal }) => {
  const handleModalClick = event => {
    event.stopPropagation();
  };

  return (
    <StyledBackdrop onClick={closeModal}>
      <StyledModal onClick={handleModalClick}>
        <FirstAdditionalForm closeModal={closeModal} />
      </StyledModal>
    </StyledBackdrop>
  );
};

export default FirstAdditionalModal;

FirstAdditionalModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
