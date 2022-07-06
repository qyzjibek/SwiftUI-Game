import './App.css';
import { useState, useEffect } from 'react';
import { StyleContext } from './Context';

import { NavBar } from './components/NavBar';
import { LevelMatcherStyle } from './components/LevelMatcher';
import { addCustomStyle } from './utils/addCustomStyle';

function App() {
  const [level, setLevel] = useState(Number(localStorage.getItem('level')) || 1);
  const [customStyle, setCustomStyle] = useState({});

  useEffect(() => {
    localStorage.setItem('level', level);
    setCustomStyle(addCustomStyle(level));
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
