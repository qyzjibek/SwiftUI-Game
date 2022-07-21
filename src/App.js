import './App.css';
import { useState, useEffect } from 'react';
import { StyleContext, LevelContext } from './Context';
import { NavBar } from './components/NavBar';
import { addCustomStyle } from './utils/addCustomStyle';
import { LevelMatcher } from './components/LevelMatcher';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './components/Landing';

function App() {
  const maxLevel = 13, minLevel = 1;
  const [level, setLevel] = useState(Number(localStorage.getItem('level')) || 1);
  const [customStyle, setCustomStyle] = useState({});

  useEffect(() => {
    localStorage.setItem('level', level);
    setCustomStyle(addCustomStyle(level));
  }, [level]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage setLevel={setLevel}/>} />
      <Route path="play" element={
        <>
         <NavBar /> 
         <LevelContext.Provider value={{maxLevel, minLevel}}>
            <StyleContext.Provider value={{customStyle, setCustomStyle}}>
              <LevelMatcher level={level} setLevel={setLevel}/>
            </StyleContext.Provider>
          </LevelContext.Provider>
        </>
      } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
