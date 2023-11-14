import React, { useState, useEffect } from 'react';
import {
  StyledTimerWrapper,
  StyleTimerText,
  StyledDiv,
  StyledTimerDiv,
  StyledWrapperSpan,
  StyledTimerSpan,
} from './Timer.styled';

const Timer = () => {
  // Отримуємо збережені значення таймера з localStorage або встановлюємо значення за замовчуванням
  const [hours, setHours] = useState(localStorage.getItem('timerHours') || 21);
  const [minutes, setMinutes] = useState(
    localStorage.getItem('timerMinutes') || 21
  );
  const [seconds, setSeconds] = useState(
    localStorage.getItem('timerSeconds') || 59
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Логіка для зменшення секунд, хвилин та годин
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        if (minutes > 0) {
          setSeconds(59);
          setMinutes(prevMinutes => prevMinutes - 1);
        } else {
          if (hours > 0) {
            setSeconds(59);
            setMinutes(59);
            setHours(prevHours => prevHours - 1);
          }
        }
      }
    }, 1000);

    // Збереження значень таймера в localStorage при кожній зміні
    localStorage.setItem('timerHours', hours);
    localStorage.setItem('timerMinutes', minutes);
    localStorage.setItem('timerSeconds', seconds);

    // Очистка інтервалу при видаленні компонента
    return () => clearInterval(interval);
  }, [seconds, minutes, hours]);

  return (
    <StyledTimerWrapper>
      <StyleTimerText>ПРОПОЗИЦІЯ ДІЄ:</StyleTimerText>
      <StyledDiv>
        <StyledTimerDiv>
          <StyledWrapperSpan>
            <StyledTimerSpan>
              {hours < 10 ? 0 + `${hours}` : hours}
            </StyledTimerSpan>
          </StyledWrapperSpan>
          <StyleTimerText>Години</StyleTimerText>
        </StyledTimerDiv>
        <StyledTimerDiv>
          <StyledWrapperSpan>
            <StyledTimerSpan>
              {minutes < 10 ? 0 + `${minutes}` : minutes}
            </StyledTimerSpan>
          </StyledWrapperSpan>
          <StyleTimerText>Хвилин</StyleTimerText>
        </StyledTimerDiv>
        <StyledTimerDiv>
          <StyledWrapperSpan>
            <StyledTimerSpan>
              {seconds < 10 ? 0 + `${seconds}` : seconds}
            </StyledTimerSpan>
          </StyledWrapperSpan>
          <StyleTimerText>Секунд</StyleTimerText>
        </StyledTimerDiv>
      </StyledDiv>
    </StyledTimerWrapper>
  );
};

export default Timer;
