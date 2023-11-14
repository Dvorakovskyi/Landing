import React, { useState } from 'react';
import lantern from '../../../images/additionalOrder/additionalOrder_2/fonar-ruchnoj.jpg';
import brelokS from '../../../images/additionalOrder/additionalOrder_2/brelokS.jpg';
import brelokT from '../../../images/additionalOrder/additionalOrder_2/brelokT.jpg';
import SecondAdditionalModal from './SecondAdditionalModal';
import {
  StyledAdditImg,
  StyledAdditWrapper,
  StyledRightImg,
  StyledRigthImgWrapper,
  StyledImgWrapper,
  StyledNameWrapper,
  StyledName,
  StyledChar,
  StyledAdditBtn,
  StyledCharItem,
  StyledCharList,
} from '../AdditionalOrder.styled';

const AdditionalOrderSecond = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);

    document.body.classList.add('no-scroll');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    document.body.classList.remove('no-scroll');
  };

  return (
    <StyledAdditWrapper>
      <StyledImgWrapper>
        <StyledAdditImg src={lantern} alt="Ліхтар ручний" />
        <StyledRigthImgWrapper>
          <StyledRightImg src={brelokS} alt="Ліхтар ручний" />
          <StyledRightImg src={brelokT} alt="Ліхтар ручний" />
        </StyledRigthImgWrapper>
      </StyledImgWrapper>
      <StyledNameWrapper>
        <StyledName>Ліхтар ручний</StyledName>
        <StyledName>299 грн.</StyledName>
      </StyledNameWrapper>
      <StyledChar>Особливості</StyledChar>
      <StyledCharList>
        <StyledCharItem>Працює від акумулятора або бататейки</StyledCharItem>
        <StyledCharItem>Кількість режимів: 5</StyledCharItem>
        <StyledCharItem>Водонепроникний</StyledCharItem>
        <StyledCharItem>Ударостійкий корпус</StyledCharItem>
      </StyledCharList>
      <StyledAdditBtn type="button" onClick={handleOpenModal}>
        Замовити
      </StyledAdditBtn>
      {isModalOpen && <SecondAdditionalModal closeModal={handleCloseModal} />}
    </StyledAdditWrapper>
  );
};

export default AdditionalOrderSecond;
