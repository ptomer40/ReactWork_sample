import React, { useState,useEffect } from 'react';
import ThemeContext from './contextexample/ThemeContext';
import Page from './contextexample/Page';
import Demo from './Demo'
import './style.css';
import Person1 from './higherordercomponent/Person1';
import Person2 from './higherordercomponent/Person2';
import TextFieldValidation from './TextFileldValidation';
import MovingCursor from './structuringstate/MovingCursor';
import Main from './sharingstate/Main';


function App() {

  return(
<>
<TextFieldValidation />
<MovingCursor />
<hr></hr>
<div>
<Main />

</div>

</>

  )
  
}

export default App;
