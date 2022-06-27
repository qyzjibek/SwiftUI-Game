import './App.css';
import { EditorContext } from './Context';
import { useState, useEffect } from 'react';

import { NavBar } from './components/NavBar';
import { GameSimulator } from './components/SImulator';
import { GameDescription } from './components/Description';
import { Editor } from './components/Editor';

function App() {

  const [editorContent, setEditorContent] = useState("");

  const handleContentChange = (event) => {
    setEditorContent(event.target.value);
  }

  return (
    <EditorContext.Provider value={{ handleContentChange, editorContent }}>
      <NavBar />
      <GameSimulator />
      <GameDescription />
      <Editor text={editorContent}/>
    </EditorContext.Provider>
  );
}

export default App;
