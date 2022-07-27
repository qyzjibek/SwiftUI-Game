import { EditorContext, StyleContext, LevelContext } from '../../Context';
import { useState, useContext, useEffect } from 'react';
import { GameSimulator } from '../SImulator';
import { GameDescription } from '../Description/description';
import { Editor } from '../Editor/editor';
import { LayoutEditor } from '../Editor/layoutEditor';
import { ViewEditor } from '../Editor/viewEditor';
import { LayoutSimulator } from '../SImulator/layoutSimulator';
import { CustomSimulator } from '../SImulator/index2';
import { CustomEditor } from '../Editor/customEditor';

import { levelsData } from '../../model/levelsData';

export const LevelMatcher = ({level, setLevel}) => {
  const data = levelsData[level-1];

  const [mode, setMode] = useState(1);

  const [editorContent, setEditorContent] = useState("");
  
  const {customStyle, setCustomStyle } = useContext(StyleContext);

  const {minLevel, maxLevel} = useContext(LevelContext);

  useEffect(() => {
    setEditorContent("");
  }, [mode]);

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
      <EditorContext.Provider value={{ handleContentChange, editorContent, handleLevelIncr, handleLevelDecr, mode, setMode }}>
       <StyleContext.Provider value={{customStyle, setCustomStyle}}>
          
          <GameDescription level ={level}/>
          { level < 10 ? <Editor level={level} text={editorContent} label={`Text("${data.textLabel}")`} isValidAnswer={data.isValidAnswer}/>
                      : level === 10 
                      ? <LayoutEditor level={level} text={editorContent} isValidAnswer={data.isValidAnswer}/>
                      : level > 12
                      ? <CustomEditor />
                      : <ViewEditor level={level} text={editorContent} isValidAnswer={data.isValidAnswer}/>
          }
          {level < 10 ? <GameSimulator label={data.textLabel} level={level}/> 
                      : level > 12
                      ? <CustomSimulator />
                      : <LayoutSimulator level={level} mode={mode} />
          }
          </StyleContext.Provider>
      </EditorContext.Provider>
    );
  };
  