import { EditorContext } from '../../Context';
import { useState } from 'react';

import { GameSimulator } from '../SImulator';
import { GameDescription } from '../Description/description';
import { Editor } from '../Editor/editor';

import { levelsData } from '../../model/levelsData';

export const LevelMatcherStyle = ({level, setLevel}) => {
  const data = levelsData[level-1];

  const [editorContent, setEditorContent] = useState("");

  const [customStyle, setCustomStyle] = useState({});
  
  const handleContentChange = (event) => {
    setEditorContent(event.target.value);
  }

  const handleLevelIncr = () => {
    setLevel((prev) => (prev < 3 ? prev+1 : prev));
    setCustomStyle({});
    setEditorContent("");
  }

  const handleLevelDecr = () => {
    setLevel((prev) => (prev > 1 ? prev-1 : prev));
    setCustomStyle({});
    setEditorContent("");
  }

    return (
      <EditorContext.Provider value={{ handleContentChange, editorContent, customStyle, setCustomStyle, handleLevelIncr, handleLevelDecr }}>
        <GameSimulator label={data.textLabel}/>
        <GameDescription level={level}/>
        <Editor level={level} text={editorContent} label={`Text("${data.textLabel}")`} isValidAnswer={data.isValidAnswer}/>
    </EditorContext.Provider>
    );
  };
  