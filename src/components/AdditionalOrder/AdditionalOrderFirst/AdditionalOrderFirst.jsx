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
        <StyledAdditImg src={brelok} alt="Фонарік-брелок" />
        <StyledRigthImgWrapper>
          <StyledRightImg src={brelokS} alt="Фонарік-брелок" />
          <StyledRightImg src={brelokT} alt="Фонарік-брелок" />
        </StyledRigthImgWrapper>
      </StyledImgWrapper>
      <StyledNameWrapper>
        <StyledName>Брелок-ліхтарик</StyledName>
        <StyledName>199 грн.</StyledName>
      </StyledNameWrapper>
      <StyledChar>Особливості</StyledChar>
      <StyledCharList>
        <StyledCharItem>Живлення від USB-кабеля</StyledCharItem>
        <StyledCharItem>Час зарядки 1.5 години</StyledCharItem>
        <StyledCharItem>4 режими освітлення</StyledCharItem>
        <StyledCharItem>Вбудований магніт</StyledCharItem>
      </StyledCharList>
      <StyledAdditBtn type="button" onClick={handleOpenModal}>
        Замовити
      </StyledAdditBtn>
      {isModalOpen && <FirstAdditionalModal closeModal={handleCloseModal} />}
    </StyledAdditWrapper>
  );
};

export default AdditionalOrderFirst;
