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

export const useParser=()=>{
    const {editorContent, setCustomStyle} = useContext(EditorContext);

    function addStyle() {
        const content = editorContent.trim();
        var indicesOfDot = [];
        for(var i = 0; i < content.length; i++) {
            if (content[i] === '.' && content[i-1] !== '(') indicesOfDot.push(i);
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
                } else {
                    setCustomStyle({});
                }
            } else if (end > begin) {
                const token = functionCall.slice(0, begin);
                const param = functionCall.slice(begin+2, end);

                switch (token) {
                    case "background":
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
                    default:
                        setCustomStyle({});
                }
            } else {
                setCustomStyle({});
            }
        }
    }

    return {addStyle}
    
}