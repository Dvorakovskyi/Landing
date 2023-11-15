import React, { useState } from 'react';
import brelok from '../../../images/additionalOrder/additionalOrder_1/fonarik-brelok.jpg';
import brelokS from '../../../images/additionalOrder/additionalOrder_1/brelokS.jpg';
import brelokT from '../../../images/additionalOrder/additionalOrder_1/brelokT.jpg';
import FirstAdditionalModal from './FirstAdditionalModal';
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

const AdditionalOrderFirst = () => {
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
        <StyledAdditImg src={brelok} alt="Акумуляторний ручний ліхтар" />
        <StyledRigthImgWrapper>
          <StyledRightImg src={brelokS} alt="Акумуляторний ручний ліхтар" />
          <StyledRightImg src={brelokT} alt="Акумуляторний ручний ліхтар" />
        </StyledRigthImgWrapper>
      </StyledImgWrapper>
      <StyledNameWrapper>
        <StyledName>Акумуляторний ліхтар</StyledName>
        <StyledName>250 грн.</StyledName>
      </StyledNameWrapper>
      <StyledChar>Особливості</StyledChar>
      <StyledCharList>
        <StyledCharItem>4 режими освітлення</StyledCharItem>
        <StyledCharItem>Додатковий боковий світлодіод</StyledCharItem>
        <StyledCharItem>Джерело живлення: акумулятор</StyledCharItem>
        <StyledCharItem>Дальність: 300 м</StyledCharItem>
      </StyledCharList>
      <StyledAdditBtn type="button" onClick={handleOpenModal}>
        Замовити
      </StyledAdditBtn>
      {isModalOpen && <FirstAdditionalModal closeModal={handleCloseModal} />}
    </StyledAdditWrapper>
  );
};

export default AdditionalOrderFirst;
