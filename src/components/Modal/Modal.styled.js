import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 60px 40px;
  max-width: 460px;
  overflow: hidden;

  background-color: white;
  border-radius: 14px;
`;
