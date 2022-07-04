import { Description1} from "../components/Description/desc1";
import { Description2} from "../components/Description/desc2";
import { Description3 } from "../components/Description/desc3";
import { Description4 } from "../components/Description/desc4";

const isValidBackgroundColor = (style) => {
    if (style.hasOwnProperty('background') || style.hasOwnProperty('backgroundColor')) {
      return (style.background != "" || style.backgroundColor != "") ? true : false;
    }
  
    return false
  }
  
const isValidFont = (style) => {
    if (style.hasOwnProperty('fontWeight') || style.hasOwnProperty('fontStyle')) {
        return (style.fontWeight == "bold" || style.fontStyle == "italic") ? true : false;
    }

    return false
}

const isValidColor = (style) => {
    if (style.hasOwnProperty('color')) {
        return (style.color != "") ? true : false;
      }
    
      return false
}

const isValidOpacity = (style) => {
  if (style.hasOwnProperty('opacity')) {
      return (style.opacity == "0.0") ? true : false;
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
  ]