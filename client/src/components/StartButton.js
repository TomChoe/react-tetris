import React from 'react';
import { StyledStart } from './styles/StyledStart';

const StartButton = ({ callback }) => (
  <StyledStart onClick={callback}>Start Game</StyledStart>
)

export default StartButton;