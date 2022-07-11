import { EditorContext, StyleContext, LevelContext } from '../../Context';
import { useState, useContext  } from 'react';

import { LayoutSimulator } from '../SImulator/layoutSimulator';
import { GameDescription } from '../Description/description';
import { LayoutEditor } from '../Editor/layoutEditor';

import { levelsData } from '../../model/levelsData';

export const LevelMatcherLayout = ({level, setLevel}) => {
  const data = levelsData[level-1];

  const [editorContent, setEditorContent] = useState("");
  
  const {customStyle, setCustomStyle } = useContext(StyleContext);

  const {minLevel, maxLevel} = useContext(LevelContext);

  const handleContentChange = (event) => {
    setEditorContent(event.target.value);
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
        <LayoutSimulator level={level}/>
        <GameDescription level={level}/>
        <LayoutEditor level={level} text={editorContent} isValidAnswer={data.isValidAnswer}/>
      </EditorContext.Provider>
    );
  };
  