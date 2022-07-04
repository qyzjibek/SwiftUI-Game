import { Description1} from "../components/Description/desc1";
import { Description2} from "../components/Description/desc2";

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
  
  export const levelsData = [
    {
      level: 1,
      textLabel: "Hello SwiftUI",
      description: <Description1 />,
      isValidAnswer: isValidColor
    },
    {
      level: 2,
      textLabel: "Make me bold, then italic",
      description: <Description2/>,
      isValidAnswer: isValidFont
    }
  ]