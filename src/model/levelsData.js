import { Description1} from "../components/Description/levelDescriptions/desc1";
import { Description2} from "../components/Description/levelDescriptions/desc2";
import { Description3 } from "../components/Description/levelDescriptions/desc3";
import { Description4 } from "../components/Description/levelDescriptions/desc4";
import { Description5 } from "../components/Description/levelDescriptions/desc5";
import { Description6 } from "../components/Description/levelDescriptions/desc6";

const isValidBackgroundColor = (style) => {
    if (style.hasOwnProperty('background') || style.hasOwnProperty('backgroundColor')) {
      return (!style.background || !style.backgroundColor) ? true : false;
    }
  
    return false
  }
  
const isValidFont = (style) => {
    if (style.hasOwnProperty('fontWeight') || style.hasOwnProperty('fontStyle')) {
        return (style.fontWeight === "bold" || style.fontStyle === "italic") ? true : false;
    }

    return false
}

const isValidColor = (style) => {
    if (style.hasOwnProperty('color')) {
        return (!style.color) ? true : false;
      }
    
      return false
}

const isValidOpacity = (style) => {
  if (style.hasOwnProperty('opacity')) {
      return (Number(style.opacity) <= 1.0 && Number(style.opacity) >= 0.0) ? true : false;
  }

  return false
}

const isValidRadius = (style) => {
  if (style.hasOwnProperty('opacity')) {
      return (Number(style.opacity) <= 1.0 && Number(style.opacity) >= 0.0) ? true : false;
  }

  return false
}
 
  export const levelsData = [
    {
      textLabel: "Hello SwiftUI",
      description: <Description1 />,
      isValidAnswer: isValidBackgroundColor
    },
    {
        textLabel: "Make me any color",
        description: <Description3/>,
        isValidAnswer: isValidColor
    },
    {
      textLabel: "Make me bold, then italic",
      description: <Description2/>,
      isValidAnswer: isValidFont
    },
    {
      textLabel: "Make me invisible",
      description: <Description4/>,
      isValidAnswer: isValidOpacity
    },
    {
      textLabel: "Make me Rounded",
      description: <Description5/>,
      isValidAnswer: isValidRadius
    },
    {
      textLabel: "Give me a frame",
      description: <Description6/>,
      isValidAnswer: isValidRadius
    },
  ]