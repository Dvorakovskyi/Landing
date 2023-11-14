import React, { useState } from 'react';
import lampa from '../../../images/additionalOrder/additionalOrder_3/lampa.webp';
import brelokS from '../../../images/additionalOrder/additionalOrder_3/brelokS.jpg';
import brelokT from '../../../images/additionalOrder/additionalOrder_3/brelokT.jpg';
import ThirdAdditionalModal from './ThirdAdditionalModal';
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

const AdditionalOrderThird = () => {
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
        <StyledAdditImg src={lampa} alt="Ліхтар ручний" />
        <StyledRigthImgWrapper>
          <StyledRightImg src={brelokS} alt="Ліхтар ручний" />
          <StyledRightImg src={brelokT} alt="Ліхтар ручний" />
        </StyledRigthImgWrapper>
      </StyledImgWrapper>
      <StyledNameWrapper>
        <StyledName>Настільна лампа</StyledName>
        <StyledName>180 грн.</StyledName>
      </StyledNameWrapper>
      <StyledChar>Особливості</StyledChar>
      <StyledCharList>
        <StyledCharItem>Живлення: три батарейки</StyledCharItem>
        <StyledCharItem>Колір: білий</StyledCharItem>
        <StyledCharItem>Матеріал: метал, пластик</StyledCharItem>
        <StyledCharItem>
          Гнучка ніжка лампи дозволяє повертати на 360 градусів
        </StyledCharItem>
      </StyledCharList>
      <StyledAdditBtn type="button" onClick={handleOpenModal}>
        Замовити
      </StyledAdditBtn>
      {isModalOpen && <ThirdAdditionalModal closeModal={handleCloseModal} />}
    </StyledAdditWrapper>
  );
};

export default AdditionalOrderThird;
