// Button.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Button() {
  const theme = useContext(ThemeContext);

  return <button className={theme}>I am a {theme} button</button>;
}

export default Button;
