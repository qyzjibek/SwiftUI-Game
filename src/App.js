import './App.css';
import { useState, useEffect } from 'react';
import { StyleContext, LevelContext } from './Context';

import { NavBar } from './components/NavBar';
import { LevelMatcherStyle } from './components/LevelMatcher';
import { LevelMatcherLayout } from './components/LevelMatcher/index1';
import { addCustomStyle } from './utils/addCustomStyle';

function App() {
  const maxLevel = 12, minLevel = 1;
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
          {level < 10 && <LevelMatcherStyle level={level} setLevel={setLevel}/>}
          {level > 9 && <LevelMatcherLayout level={level} setLevel={setLevel}/>}
        </StyleContext.Provider>
      </LevelContext.Provider>
    </>
  );
}

export default App;
