import { EditorContext, StyleContext, LevelContext } from '../../Context';
import { useState, useContext  } from 'react';

import { LayoutSimulator } from '../SImulator/layoutSimulator';
import { GameSimulator } from '../SImulator';
import { GameDescription } from '../Description/description';
import { LayoutEditor } from '../Editor/layoutEditor';
import { ViewEditor } from '../Editor/viewEditor';
import { Editor } from '../Editor/editor';

import { levelsData } from '../../model/levelsData';
import { useEffect } from 'react';

export const LevelMatcherLayout = ({level, setLevel}) => {
  const data = levelsData[level-1];

  const [editorContent, setEditorContent] = useState("");

  const [mode, setMode] = useState(1);
  
  const {customStyle, setCustomStyle } = useContext(StyleContext);

  const {minLevel, maxLevel} = useContext(LevelContext);

  useEffect(() => {
    setEditorContent("");
  }, [mode]);

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
      <EditorContext.Provider value={{ handleContentChange, editorContent, handleLevelIncr, handleLevelDecr, mode, setMode }}>
        <StyleContext.Provider value={{customStyle, setCustomStyle}}></StyleContext.Provider>
        <LayoutSimulator level={level} mode={mode} />
        <GameDescription level={level}/>
        {level === 10 && <LayoutEditor level={level} text={editorContent} isValidAnswer={data.isValidAnswer}/>}
        {level > 10 &&  level < 13 && <ViewEditor level={level} text={editorContent} isValidAnswer={data.isValidAnswer}/>}
      </EditorContext.Provider>
    );
  };
  