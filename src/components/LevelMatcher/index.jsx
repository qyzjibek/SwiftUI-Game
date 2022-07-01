import { EditorContext } from '../../Context';
import { useState } from 'react';

import { GameSimulator } from '../SImulator';
import { GameDescription } from '../Description/description';
import { Editor } from '../Editor/editor';
/*
const isValidColor = (style) => {
  if (style.hasOwnProperty('background') || style.hasOwnProperty('backgroundColor')) {
    return (style.background != "" || style.backgroundColor != "") ? true : false;
  }

  return false
}

const isValidFont= (style) => {
  if (style.hasOwnProperty('fontWeight') || style.hasOwnProperty('fontStyle')) {
    return (style.fontWeight == "bold" || style.fontStyle == "italic") ? true : false;
  }

  return false
}

const levelsData = [
  {
    level: 1,
    textLabel: "Hello SwiftUI",
    isValid: isValidColor
  },
  {
    level: 2,
    textLabel: "Make me bold, then italic",
    isValid: isValidFont
  }
]

*/

export const LevelMatcherStyle = ({level, setLevel}) => {
  const [editorContent, setEditorContent] = useState("");

  const [customStyle, setCustomStyle] = useState({});

  const getLabel = () => {
    switch (level) {
      case 1:
        return "Hello SwiftUI"
      case 2: 
        return "Make me bold, then italic"
      default: 
        return "Hello World!"
    }
  }
  
  const handleContentChange = (event) => {
    setEditorContent(event.target.value);
  }

  const handleLevelChange = () => {
    setLevel((prev) => (prev < 2 ? prev+1 : prev));
    setCustomStyle({});
    setEditorContent("");
  }
 
  const isValidColor = (style) => {
    if (style.hasOwnProperty('background') || style.hasOwnProperty('backgroundColor')) {
      return (style.background != "" || style.backgroundColor != "") ? true : false;
    }

    return false
  }

  const isValidFont= (style) => {
    if (style.hasOwnProperty('fontWeight') || style.hasOwnProperty('fontStyle')) {
      return (style.fontWeight == "bold" || style.fontStyle == "italic") ? true : false;
    }

    return false
  }

  const isValidAnswer = (style) => {
    // style.background != "" || style.backgroundColor != ""
    switch (level) {
      case 1:
        return isValidColor(style);
      case 2:
        return isValidFont(style);
      default:
        return false
    }
    
  }
    return (
      <EditorContext.Provider value={{ handleContentChange, editorContent, customStyle, setCustomStyle, handleLevelChange }}>
        <GameSimulator label={getLabel()}/>
        <GameDescription level={level}/>
        <Editor level={level} text={editorContent} label={`Text("${getLabel()}")`} isValidAnswer={isValidAnswer}/>
    </EditorContext.Provider>
    );
  };
  