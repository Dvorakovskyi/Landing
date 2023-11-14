import React from 'react';
import PropTypes from 'prop-types';
import SecondAdditionalForm from './SecondAdditionalForm';
import { StyledModal, StyledBackdrop } from 'components/Modal/Modal.styled';

const SecondAdditionalModal = ({ closeModal }) => {
  const handleModalClick = event => {
    event.stopPropagation();
  };

  return (
    <StyledBackdrop onClick={closeModal}>
      <StyledModal onClick={handleModalClick}>
        <SecondAdditionalForm closeModal={closeModal} />
      </StyledModal>
    </StyledBackdrop>
  );
};

export default SecondAdditionalModal;

SecondAdditionalModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
