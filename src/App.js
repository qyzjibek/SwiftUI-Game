import './App.css';
import { useState, useEffect } from 'react';

import { NavBar } from './components/NavBar';
import { LevelMatcherStyle } from './components/LevelMatcher';
import { useForkRef } from '@mui/material';

function App() {
  const [level, setLevel] = useState(Number(localStorage.getItem('level')) || 1);
  console.log(level)
  // useEffect(() => {
  //   const currLevel = localStorage.getItem('level');
  //   if (currLevel) {
  //     setLevel(currLevel);
  //   }
  // }, []);

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
