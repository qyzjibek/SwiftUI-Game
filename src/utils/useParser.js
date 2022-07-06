import {useContext} from 'react';
import { EditorContext, StyleContext } from '../Context';
import { CSS_COLOR_NAMES } from '../data/colorPallet';
import { addCustomStyle } from './addCustomStyle';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function isColorValid(color) {
    return CSS_COLOR_NAMES.includes(capitalizeFirstLetter(color)) ? color : "";
}

export const useParser=()=>{
    const {editorContent} = useContext(EditorContext);
    const { setCustomStyle } = useContext(StyleContext);

    function indexesOf(c, content) {
        let arr = [];
        for (let i = 0; i < content.length; i++) {
            if (c === content[i]) arr.push(i);
        }

        return arr;
    }

    function isValidAlignment(alignment) {
        console.log(alignment.slice(1));
        switch (alignment.slice(1)) {
            case "trailing": return "end";
            case "leading": return "start";
            case "center": return "center";
            default: return "";
        }
    }

    function makeStyle(functionCall, begin, end) {
        const parameters = functionCall.slice(begin+1, end).split(',');
        if (parameters.length > 1) {
            let style = {};
            for (const parameter of parameters) {
                const semicolon = parameter.indexOf(':');
                const name = parameter.slice(0, semicolon).trim();
                const value = parameter.slice(semicolon+1, end).trim();
                if (name == "alignment" && value.startsWith('.')) {
                    style["textAlign"] = isValidAlignment(value);
                } else {
                    style[name] = value + "px";
                }
            }
            console.log(style);
            return style;
        }
    }

    function addStyle() {
        const content = editorContent.trim();
        var indicesOfDot = [];
        for(var i = 0; i < content.length; i++) {
            const paramIndexes = indexesOf('(', content);
            for (const index of paramIndexes) {
                if (content[i] === '.' && content[i-1] !== '(' && i < index) indicesOfDot.push(i);
            }
        }

        for(var i = 0; i < indicesOfDot.length; i++) {
            const index = indicesOfDot[i];
            const functionCall = i == 1 ? content.slice(index+1).trim() : content.slice(index+1, indicesOfDot[i+1]).trim();
            const begin =  functionCall.indexOf('(');
            const end = functionCall.indexOf(')');

            if (begin + 1 == end) {
                const token = functionCall.slice(0, -2).trim();
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
                    default:
                        setCustomStyle({});
                }
            } else if (indicesOfDot.length < 2) {
                setCustomStyle({});
            } 
        }
    }

    return {addStyle}
    
}