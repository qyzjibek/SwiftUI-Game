import './App.css';
import { EditorContext } from './Context';
import { useState, useEffect } from 'react';

import { NavBar } from './components/NavBar';
import { GameSimulator } from './components/SImulator';
import { GameDescription2 } from './components/Description/desc2';
import { Editor2 } from './components/Editor/editor2';

function App() {
  const [matchedColor, setMatchedColor] = useState("");
  const [matchedFont, setMatchedFont] = useState({});

  const [editorContent, setEditorContent] = useState("");

  const handleContentChange = (event) => {
    setEditorContent(event.target.value);
  }

  return (
    <EditorContext.Provider value={{ handleContentChange, editorContent, matchedColor, setMatchedColor }}>
      <NavBar /> 
      {/* <LevelMatcher /> */}
      <GameSimulator matchedColor={matchedColor} setMatchedColor={setMatchedColor} matchedFont={matchedFont} setMatchedFont={setMatchedFont}/>
      <GameDescription2 />
      <Editor2 text={editorContent} matchedColor={matchedColor}/>
    </EditorContext.Provider>
  );
}

export default App;
