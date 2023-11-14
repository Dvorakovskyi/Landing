import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Hero from 'components/Hero/Hero';
import Price from 'components/Price/Price';
import Description from 'components/Description/Description';
import Timer from 'components/Timer/Timer';
import Button from 'components/Button/Button';
import Remainder from 'components/Remainder/Remainder';
import Modal from 'components/Modal/Modal';
import SecondDescription from 'components/SecondDescription/SecondDescription';
import Benefits from 'components/Benefits/Benefits';
import Img from 'components/Img/Img';
import Delivery from 'components/Delivery/Delivery';
import Reviews from 'components/Reviews/Reviews';
import Characteristics from 'components/Сharacteristics/Сharacteristics';
import CompleteSet from 'components/CompleteSet/CompleteSet';
import { StyledMain } from './Main.styled';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);

    document.body.classList.add('no-scroll');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    if (!isNotificationShown) {
      const timer = setTimeout(() => {
        Notify.info('Олексій зробив замовлення, залишилось 11 штук');

        setIsNotificationShown(true);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [isNotificationShown]);

  return (
    <StyledMain>
      <Hero />
      <Price />
      <Description />
      <Timer />
      <Button openModal={handleOpenModal} />
      {isModalOpen && <Modal closeModal={handleCloseModal} />}
      <Remainder />
      <SecondDescription />
      <Benefits />
      <Characteristics />
      <CompleteSet/>
      <Button openModal={handleOpenModal} />
      <Img />
      <Delivery />
      <Reviews />
      <Hero />
      <Price />
      <Timer />
      <Button openModal={handleOpenModal} />
      <Remainder />
    </StyledMain>
  );
};

export default Main;
