import {useContext} from 'react';
import { EditorContext, StyleContext } from '../Context';
import { CSS_COLOR_NAMES } from '../data/colorPallet';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function isColorValid(color) {
    return CSS_COLOR_NAMES.includes(capitalizeFirstLetter(color)) ? color : "";
}

function isTextCaseValid(param) {
    return param === "uppercase" || param === "lowercase" ? param : "";
}

function isFontValid(param) {
    const paramBegin = param.indexOf("(");
    const token = param.slice(0, paramBegin);
    const parameter = param.slice(paramBegin+1);

    if (token == "system") {
        const semic = parameter.indexOf(':');
        const name = parameter.slice(0, semic).trim();
        const value = parameter.slice(semic+1).trim();
        if (name == "size") return { fontSize: value + "px"};
    }
    
    switch (param) {
        case "headline":
            return {
                fontWeight: 600,
                fontSize: "17px"
            };
        case "largeTitle":
            return {
                fontSize: "34px"
            };
        case "title1":
            return {
                fontSize: "28px"
            };
        case "title2":
            return {
                fontSize: "22px"
            };
        case "title3":
            return {
                fontSize: "20px"
            };
        case "callout":
            return {
                fontSize: "16px"
            };
        case "subheadline":
            return {
                fontSize: "15px"
            };
        case "body":
            return {
                fontSize: "17px"
            };
        case "footnote":
            return {
                fontSize: "13px"
            };
        case "caption1":
            return {
                fontSize: "12px"
            };
        case "caption2":
            return {
                fontSize: "11px"
            };
        default: return {};
    }
}

export const useParser=()=>{
    const {editorContent} = useContext(EditorContext);
    const { setCustomStyle, customStyle } = useContext(StyleContext);

    function indexesOf(c, content) {
        let arr = [];
        for (let i = 0; i < content.length; i++) {
            if (c === content[i]) arr.push(i);
        }

        return arr;
    }

    function isValidAlignment(alignment) {
        switch (alignment.slice(1)) {
            case "trailing": return "end";
            case "leading": return "start";
            case "center": return "center";
            default: return "";
        }
    }

    function makeStyle(functionCall, begin, end) {
        const parameters = functionCall.slice(begin+1, end).split(',');

        if (parameters.length > 0) {
            let style = {};
            for (const parameter of parameters) {
                const semicolon = parameter.indexOf(':');
                const name = parameter.slice(0, semicolon).trim();
                const value = parameter.slice(semicolon+1, end).trim();
                if (name == "alignment" && value.startsWith('.')) {
                    style["textAlign"] = isValidAlignment(value);
                    style["alignItems"] = isValidAlignment(value);
                } else if (name == "spacing") {
                    style["gap"] = value + "px";
                }
                else {
                    style[name] = value + "px";
                }
            }
            return style;
        }
    }

    function addStyleToText(content) {
        var indicesOfDot = [];
        for(var i = 0; i < content.length; i++) {
            const paramIndexes = indexesOf('(', content);
            for (const index of paramIndexes) {
                if (content[i] === '.' && content[i-1] !== '(' && i < index) indicesOfDot.push(i);
            }
        }

        for(var i = 0; i < indicesOfDot.length; i++) {
            const index = indicesOfDot[i];
            const functionCall = i == (indicesOfDot.length - 1) ? content.slice(index+1).trim() : content.slice(index+1, indicesOfDot[i+1]).trim();
            const begin =  functionCall.indexOf('(');
            const end = functionCall.indexOf(')');

            if (begin + 1 === end) {
                const token = functionCall.slice(0, begin).trim();
                if (token == "italic") {
                    setCustomStyle((prev) => ({
                        ...prev,
                        fontStyle: 'italic'
                    }));
                } else if (token== "bold") {
                    setCustomStyle((prev) => ({
                        ...prev,
                        fontWeight: 'bold'
                    }));
                } else if (token== "hidden") {
                    setCustomStyle((prev) => ({
                        ...prev,
                        opacity: 0
                    }));
                } else if (token== "underline") {
                    setCustomStyle((prev) => ({
                        ...prev,
                        textDecoration: "underline"
                    }));
                } else if (token== "padding") {
                    console.log("here");
                    setCustomStyle((prev) => ({
                        ...prev,
                        padding: "8px"
                    }));
                }
            } else if (end > begin) {
                const token = functionCall.slice(0, begin);
                const paramBegin = functionCall.indexOf('.');
                const paramType = functionCall.slice(begin+1, paramBegin);
                const param = functionCall.slice(paramBegin+1, end);

                switch (token) {
                    case "background":
                        // console.log(paramType != "Color",  paramType != "")
                        setCustomStyle((prev) => ({
                            ...prev,
                            backgroundColor: isColorValid(param.trim())
                        }));
                        break;
                    case "foregroundColor":
                        setCustomStyle((prev) => ({
                            ...prev,
                            color: isColorValid(param.trim())
                        }));
                        break;
                    case "opacity":
                        const opacity = functionCall.slice(begin+1, end).trim();
                        setCustomStyle((prev) => ({
                            ...prev,
                             // backgroundColor: "rgb(255, 69, 58)",
                             opacity: Number(opacity)
                        }));
                        break;
                    case "cornerRadius":
                        const radius = functionCall.slice(begin+1, end).trim();
                        setCustomStyle((prev) => ({
                            ...prev,
                             // backgroundColor: "rgb(48, 209, 88)",
                             borderRadius: Number(radius)
                        }));
                        break;
                    case "frame":
                        setCustomStyle((prev) => ({
                            ...prev,
                            ...makeStyle(functionCall, begin, end)
                        }));
                        break;
                    case "textCase":
                        setCustomStyle((prev) => ({
                            ...prev,
                            textTransform: isTextCaseValid(param.trim())
                        }));
                        break;
                    case "font":
                        setCustomStyle((prev) => ({
                            ...prev,
                            ...isFontValid(param.trim())
                        }));
                        break;
                    default:
                        setCustomStyle({});
                }
            } else if (indicesOfDot.length < 2) {
                return;
            } 
        }
    }

    function addStyleToView(content) {
        const paramBeginIndex = content.indexOf('(');
        const paramEndIndex = content.indexOf(')'); 

        const functionCall = paramEndIndex != -1 && paramBeginIndex != -1 ? content.slice(0, paramBeginIndex) : content;
        const declaration = content.slic(0, paramEndIndex);

        if(paramBeginIndex)

        switch (functionCall) {
            case "VStack": setCustomStyle((prev) => ({
                ...prev,
                ...makeStyle(content, paramBeginIndex, paramEndIndex),
                display: "flex",
                flexDirection: "column"
            }));
            break;
            case "HStack": setCustomStyle((prev) => ({
                ...prev,
                ...makeStyle(content, paramBeginIndex, paramEndIndex),
                display: "flex",
                flexDirection: "row"
            }));
            break;
            case "ZStack": 
                setCustomStyle((prev) => ({
                    ...prev,
                    display: "flex",
                    flexDirection: "row"
                }));
                return {position: "absolute"};
            default: return;
        }
    }


    function addStyle(level) {
        const content = editorContent.trim();
        return level < 9 ? addStyleToText(content) : addStyleToView(content);
    }

    return {addStyle}
    
}