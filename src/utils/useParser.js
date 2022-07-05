import {useContext} from 'react';
import { EditorContext } from '../Context';
import { CSS_COLOR_NAMES } from '../data/colorPallet';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function isColorValid(color) {
    // TODO: Parse Color
    return CSS_COLOR_NAMES.includes(capitalizeFirstLetter(color)) ? color : "";
}

function isOpacityValid(num) {
    return num <= 1.0 && num >= 0.0;
}

export const useParser=()=>{
    const {editorContent, setCustomStyle} = useContext(EditorContext);

    function indexesOf(c, content) {
        let arr = [];
        for (let i = 0; i < content.length; i++) {
            if (c == content[i]) arr.push(i);
        }

        return arr;
    }

    function isDigit(c) {
        return c >= '0' && c <= '9';
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
                        const num = functionCall.slice(begin+1, end).trim();
                        setCustomStyle({
                            backgroundColor: `rgba(255,0,0,${Number(num)}`
                            // opacity: Number(num)
                        });
                        break;
                    default:
                        setCustomStyle({});
                }
            } else if (indicesOfDot.length < 2) {
                console.log("erase");
                setCustomStyle({});
            } 
        }
    }

    function addCustomStyle(level) {
        if(level == 4) {
            console.log(level);
            setCustomStyle({
                backgroundColor: "red"
            });
        }
    }

    return {addStyle, addCustomStyle}
    
}