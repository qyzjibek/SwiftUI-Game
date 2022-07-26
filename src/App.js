import './App.css';
import { useState, useEffect } from 'react';
import { StyleContext, LevelContext } from './Context';
import { NavBar } from './components/NavBar';
import { addCustomStyle } from './utils/addCustomStyle';
import { LevelMatcher } from './components/LevelMatcher';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './components/Landing';
import Confetti from 'react-confetti';

function App() {
  const maxLevel = 12, minLevel = 1;
  const [level, setLevel] = useState(Number(localStorage.getItem('level')) || 1);
  const [customStyle, setCustomStyle] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [customView, setCustomView] = useState([]);

  useEffect(() => {
    setCustomStyle(addCustomStyle(level));
  }, [level]);

  const saveProgress = () => {
    localStorage.setItem('level', level);
    alert("Your progress was saved successfully");
  }

  return (
    <BrowserRouter>
      {showConfetti ? <Confetti colors={["#b0b", "#8c28c2", "#e30000", "#38a39c", "#4ca9ff"]} width={2000} height={800}/> : <></>}
    <Routes>
      <Route path="/" element={<LandingPage setLevel={setLevel}/>} />
      <Route path="play" element={
        <>
         <NavBar saveProgress={saveProgress}/> 
         <LevelContext.Provider value={{maxLevel, minLevel}}>
            <StyleContext.Provider value={{customStyle, setCustomStyle, setShowConfetti, customView, setCustomView}}>
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
