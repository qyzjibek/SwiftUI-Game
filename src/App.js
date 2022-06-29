import './App.css';
import { EditorContext } from './Context';
import { useState, useEffect } from 'react';

import { NavBar } from './components/NavBar';
import { GameSimulator } from './components/SImulator';
import { GameDescription } from './components/Description';
import { Editor } from './components/Editor';

function App() {
  const [matchedColor, setMatchedColor] = useState("");

  const [editorContent, setEditorContent] = useState("");

  const handleContentChange = (event) => {
    setEditorContent(event.target.value);
  }

  return (
    <EditorContext.Provider value={{ handleContentChange, editorContent, matchedColor, setMatchedColor }}>
      <NavBar />
      <GameSimulator matchedColor={matchedColor} setMatchedColor={setMatchedColor}/>
      <GameDescription />
      <Editor text={editorContent} matchedColor={matchedColor}/>
    </EditorContext.Provider>
  );
}

export default App;
