import { Description1} from "../components/Description/levelDescriptions/desc1";
import { Description2} from "../components/Description/levelDescriptions/desc2";
import { Description3 } from "../components/Description/levelDescriptions/desc3";
import { Description4 } from "../components/Description/levelDescriptions/desc4";
import { Description5 } from "../components/Description/levelDescriptions/desc5";
import { Description6 } from "../components/Description/levelDescriptions/desc6";
import { Description7 } from "../components/Description/levelDescriptions/desc7";
import { Description8 } from "../components/Description/levelDescriptions/desc8";
import { Description9 } from "../components/Description/levelDescriptions/desc9";
import { Description10 } from "../components/Description/levelDescriptions/desc10";
import { Description11 } from "../components/Description/levelDescriptions/desc11";
import { Description12 } from "../components/Description/levelDescriptions/desc12";

const isValidBackgroundColor = (style) => {
    if (!style) return;

    if (style.hasOwnProperty('backgroundColor')) {
      return (!style.backgroundColor) ? false : true;
    }
  
    return false
}
  
const isValidFont = (style) => {
  if (!style) return;

  if (style.hasOwnProperty('fontWeight') || style.hasOwnProperty('fontStyle')) {
      return (style.fontWeight === "bold" && style.fontStyle === "italic") ? true : false;
  }

  return false
}

const isValidColor = (style) => {
  if (!style) return;

  if (style.hasOwnProperty('color')) {
      return (!style.color) ? true : false;
    }
  
  return false
}

const isValidPadding = (style) => {
  if (!style) return;

  if (style.hasOwnProperty('padding')) {
      return (!style.padding) ? true : false;
    }
  
  return false
}

const isValidOpacity = (style) => {
  if (!style) return;

  if (style.hasOwnProperty('opacity')) {
      return (Number(style.opacity) <= 1.0 && Number(style.opacity) >= 0.0) ? true : false;
  }

  return false
}

const isValidRadius = (style) => {
  if (!style) return;

  if (style.hasOwnProperty('borderRadius')) {
      return (!style.borderRadius) ? false : true;
  }

  return false
}

const isValidFrame = (style) => {
  if (!style) return;

  if (style.hasOwnProperty('width') || style.hasOwnProperty('height') || style.hasOwnProperty('alignment')) {
    return (!style.width && !style.height && !style.alignment) ? false : true;
  }

  return false
}
 
const isValidTextCase = (style) => {
  if (!style) return;

  if (style.hasOwnProperty('textTransform') || style.hasOwnProperty('textDecoration')) {
    return (!style.textTransform && !style.textTransform) ? false : true;
  }

  return false
}

const isValidStack = (style) => {
  if (!style) return;

  if (style.hasOwnProperty('display') && style.hasOwnProperty('flexDirection')) {
    return (!style.display && !style.flexDirection) ? false : true;
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
    isValidAnswer: isValidFrame
  },
  {
    textLabel: "Transform me",
    description: <Description7/>,
    isValidAnswer: isValidTextCase
  },{
    textLabel: "Give me font",
    description: <Description8/>,
    isValidAnswer: isValidTextCase
  },
  {
    textLabel: "Give me padding",
    description: <Description12/>,
    isValidAnswer: isValidPadding
  },
  {
    description: <Description9/>,
    isValidAnswer: isValidStack
  },
  {
    description: <Description10/>,
    isValidAnswer: isValidStack
  },
  {
    description: <Description11/>,
    isValidAnswer: isValidStack
  }
]