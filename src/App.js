import './App.css';
import { useState, useEffect } from 'react';
import { StyleContext } from './Context';

import { NavBar } from './components/NavBar';
import { LevelMatcherStyle } from './components/LevelMatcher';
import { useParser } from './utils/useParser';

function App() {
  const [level, setLevel] = useState(Number(localStorage.getItem('level')) || 1);
  const [customStyle, setCustomStyle] = useState({});

  const {addCustomStyle} = useParser();

  useEffect(() => {
    localStorage.setItem('level', level);
    // addCustomStyle(level);
  }, [level]);

  return (
    <>
      <NavBar /> 
      <StyleContext.Provider value={{customStyle, setCustomStyle}}>
        <LevelMatcherStyle level={level} setLevel={setLevel}/>
      </StyleContext.Provider>
    </>
  );
}

export default App;
