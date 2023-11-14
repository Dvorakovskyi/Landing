import React from 'react';
import img from '../../images/description/secDesc.jpg';
import carImg from '../../images/description/car.jpg';
import redTer from '../../images/description/red.jpg';
import {
  StyledSection,
  StyledDescImg,
  StyledDescText,
  StyledSpan,
} from '../Description/Description.styled';

const SecondDescription = () => {
  return (
    <StyledSection>
      <StyledDescImg src={img} alt="Термос" />
      <StyledDescText>
        Це не просто приємний, але й дуже корисний{' '}
        <StyledSpan>подарунок!</StyledSpan> В одній валізці заховано все
        необхідне <StyledSpan>для створення шедеврів:</StyledSpan> фарби,
        воскова пастела, воскова крейда, олівці, фломастери та багато інших
        важливих канцелярських дрібниць. <br />
        Завдяки <StyledSpan>валізі</StyledSpan> зменшується ризик втрати
        олівців, вона значно полегшує транспортування та використання набору
        дитиною, наприклад, під час подорожі.
      </StyledDescText>
      <StyledDescImg src={carImg} alt="Термос" />
      <StyledDescText>
        Арт набір стане знахідкою для батьків, зацікавлених у{' '}
        <StyledSpan>гармонійному розвитку</StyledSpan> своєї дитини. З його
        допомогою дитина буде <StyledSpan>захоплююче та з користю</StyledSpan>{' '}
        проводити вільний час без використання гаджетів! <br />
        Бажаєте щоб Ваша дитина займалася творчістю? З таким{' '}
        <StyledSpan>широким асортиментом</StyledSpan> елементів їй буде набагато
        цікавіше розфарбовувати, малювати та фантазувати на папері. <br />
        Малювання <StyledSpan>
          позитивно позначиться на розвитку
        </StyledSpan>{' '}
        дитячої уяви, фантазії, кмітливості, абстрактному мисленні, координації
        рухів та розвине творчі навички.
      </StyledDescText>
      <StyledDescImg src={redTer} alt="Термос" />
    </StyledSection>
  );
};

export default SecondDescription;
