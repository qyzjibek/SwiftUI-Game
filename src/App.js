import './App.css';
import { useState, useEffect } from 'react';

import { NavBar } from './components/NavBar';
import { LevelMatcherStyle } from './components/LevelMatcher';

function App() {
  const [level, setLevel] = useState(Number(localStorage.getItem('level')) || 1);
  
  useEffect(() => {
    localStorage.setItem('level', level);
  }, [level]);

  return (
    <>
      <NavBar /> 
      <LevelMatcherStyle level={level} setLevel={setLevel}/>
    </>
  );
}

export default App;
