import React from 'react';
import PropTypes from 'prop-types';
import ThirdAdditionalForm from './ThirdAdditionalForm';
import { StyledModal, StyledBackdrop } from 'components/Modal/Modal.styled';

const ThirdAdditionalModal = ({ closeModal }) => {
  const handleModalClick = event => {
    event.stopPropagation();
  };

  return (
    <StyledBackdrop onClick={closeModal}>
      <StyledModal onClick={handleModalClick}>
        <ThirdAdditionalForm closeModal={closeModal} />
      </StyledModal>
    </StyledBackdrop>
  );
};

export default ThirdAdditionalModal;

ThirdAdditionalModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
