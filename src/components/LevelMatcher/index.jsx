import { EditorContext } from '../../Context';
import { useState } from 'react';

import { GameSimulator } from '../SImulator';
import { GameDescription } from '../Description/description';
import { Editor } from '../Editor/editor';

export const LevelMatcherStyle = ({level, setLevel}) => {
  const [editorContent, setEditorContent] = useState("");

  const [customStyle, setCustomStyle] = useState({});
  
  const handleContentChange = (event) => {
    setEditorContent(event.target.value);
  }

  const isValidAnswer = (style) => {
    // style.background != "" || style.backgroundColor != ""

    if (style.hasOwnProperty('background') || style.hasOwnProperty('backgroundColor')) {
      return (style.background != "" || style.backgroundColor != "") ? true : false;
    }

    return false
  }
    return (
      <EditorContext.Provider value={{ handleContentChange, editorContent, customStyle, setCustomStyle, setLevel }}>
        <GameSimulator />
        <GameDescription level={level}/>
        <Editor level={level} text={editorContent} label={'Text("Hello World") \n'} isValidAnswer={isValidAnswer}/>
    </EditorContext.Provider>
    );
  };
  