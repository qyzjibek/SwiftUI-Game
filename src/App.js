import './App.css';
import { useState, useEffect } from 'react';

import { NavBar } from './components/NavBar';
import { LevelMatcherStyle } from './components/LevelMatcher';
import { useParser } from './utils/useParser';

function App() {
  const [level, setLevel] = useState(Number(localStorage.getItem('level')) || 1);

  const {addCustomStyle} = useParser();

  useEffect(() => {
    localStorage.setItem('level', level);
    // addCustomStyle(level);
  }, [level]);

  return (
    <>
      <NavBar /> 
      <LevelMatcherStyle level={level} setLevel={setLevel}/>
    </>
  );
}

export default App;
