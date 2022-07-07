import './App.css';
import { useState, useEffect } from 'react';
import { StyleContext, LevelContext } from './Context';

import { NavBar } from './components/NavBar';
import { LevelMatcherStyle } from './components/LevelMatcher';
import { addCustomStyle } from './utils/addCustomStyle';

function App() {
  const maxLevel = 7, minLevel = 1;
  const [level, setLevel] = useState(Number(localStorage.getItem('level')) || 1);
  const [customStyle, setCustomStyle] = useState({});

  useEffect(() => {
    localStorage.setItem('level', level);
    setCustomStyle(addCustomStyle(level));
  }, [level]);

  return (
    <>
      <NavBar /> 
      <LevelContext.Provider value={{maxLevel, minLevel}}>
        <StyleContext.Provider value={{customStyle, setCustomStyle}}>
          <LevelMatcherStyle level={level} setLevel={setLevel}/>
        </StyleContext.Provider>
      </LevelContext.Provider>
    </>
  );
}

export default App;
