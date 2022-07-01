import './App.css';
import { useState, useEffect } from 'react';

import { NavBar } from './components/NavBar';
import { LevelMatcherStyle } from './components/LevelMatcher';

function App() {
  const [level, setLevel] = useState({});

  useEffect(() => {
    setLevel(1);
  }, [])
  return (
    <>
      <NavBar /> 
      <LevelMatcherStyle level={level} setLevel={setLevel}/>
    </>
  );
}

export default App;
