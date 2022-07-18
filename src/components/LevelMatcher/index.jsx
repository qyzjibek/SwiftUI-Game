import { EditorContext, StyleContext, LevelContext } from '../../Context';
import { useState, useContext  } from 'react';

import { GameSimulator } from '../SImulator';
import { GameDescription } from '../Description/description';
import { Editor } from '../Editor/editor';

import { levelsData } from '../../model/levelsData';

export const LevelMatcherStyle = ({level, setLevel}) => {
  const data = levelsData[level-1];

  const [editorContent, setEditorContent] = useState("");
  
  const {customStyle, setCustomStyle } = useContext(StyleContext);

  const {minLevel, maxLevel} = useContext(LevelContext);

  const handleContentChange = (value) => {
    setEditorContent(value);
  }

  const handleLevelIncr = () => {
    setLevel((prev) => (prev < maxLevel ? prev+1 : prev));
    setCustomStyle({});
    setEditorContent("");
  }

  const handleLevelDecr = () => {
    setLevel((prev) => (prev > minLevel ? prev-1 : prev));
    setCustomStyle({});
    setEditorContent("");
  }

    return (
      <EditorContext.Provider value={{ handleContentChange, editorContent, handleLevelIncr, handleLevelDecr }}>
        <StyleContext.Provider value={{customStyle, setCustomStyle}}></StyleContext.Provider>
        <GameSimulator label={data.textLabel} level={level}/>
        <GameDescription level={level}/>
        <Editor level={level} text={editorContent} label={`Text("${data.textLabel}")`} isValidAnswer={data.isValidAnswer}/>
      </EditorContext.Provider>
    );
  };
  