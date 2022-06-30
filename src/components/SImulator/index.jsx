import { useContext } from 'react';
import { EditorContext } from '../../Context';
import { useState, useEffect } from 'react';
import './index.css'

export const GameSimulator = (props) => {
    const {editorContent} = useContext(EditorContext);

    const {matchedColor, setMatchedColor, matchedFont,setMatchedFont} = props;

    const [customStyle, setCustomStyle] = useState({});

    const CSS_COLOR_NAMES = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen",
      ];      

    useEffect(() => {
        addFont();
        checkFunctionCall();
    }, [editorContent])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function checkFunctionCall() {
        setCustomStyle((prev) => ({
            ...prev,
            backgroundColor: isColorValid()
        }))
    }

    // function addStyle() {

    // }

    function isColorValid() {
        const content = editorContent.trim();
        if(content.startsWith('.') && content.endsWith(')')) {
            const parantheseIndex = content.indexOf('(');
            const argument = content.slice(parantheseIndex);
            const functionCall = content.slice(1, parantheseIndex).trim();
            if (functionCall == "background" || functionCall == "backgroundColor") {
                const argumentIndex = argument.indexOf('.');
                const color = argument.slice(1, argumentIndex) == "Color" ||  argument.slice(1, argumentIndex+1).startsWith('.') ? argument.slice(argumentIndex+1, -1) : "transparent";
                return CSS_COLOR_NAMES.includes(capitalizeFirstLetter(color)) ? color : "";
            } else {
                return "";
            }
        } else {
            return "";
        }  
    }

    function addFont() {
        const content = editorContent.trim();
        var indicesOfDot = [];
        for(var i = 0; i < content.length; i++) {
            if (content[i] === '.') indicesOfDot.push(i);
        }

        for(var i = 0; i < indicesOfDot.length; i++) {
            const index = indicesOfDot[i];
            const functionCall = i == 1 ? content.slice(index+1).trim() : content.slice(index+1, indicesOfDot[i+1]).trim();
            const begin =  functionCall.indexOf('(');
            const end = functionCall.indexOf(')');
            console.log(begin, end);
            // console.log("here: ", functionCall);
            
            const token = functionCall.slice(0, -2).trim();
            const last = functionCall.slice(-2);
            
            if (token == "italic" && last== "()") {
                setCustomStyle((prev) => ({
                    ...prev,
                    fontStyle: 'italic'
                }));
            } else if (token== "bold" && last == "()") {
                setCustomStyle((prev) => ({
                    ...prev,
                    fontWeight: 'bold'
                }));
            } else {
                setCustomStyle({});
            }
        }
    }

    return (
        <div className="game-simulator">
            <div id='text' className='text' style={customStyle}>Hello SwiftUI</div>
            <img 
      src="https://web-mobile-first.s3.eu-west-3.amazonaws.com/production/small_apple_iphone_13_pro_max_2021_1b54b42564.png"
      alt="new"
      />
        </div>
    );
};