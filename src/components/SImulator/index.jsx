import { useContext } from 'react';
import { EditorContext } from '../../Context';
import { useState, useEffect } from 'react';
import './index.css'

export const GameSimulator = (props) => {
    const {editorContent, customStyle, setCustomStyle} = useContext(EditorContext);

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
        addStyle();
    }, [editorContent])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function isColorValid(color) {
        // TODO: Parse Color
        return CSS_COLOR_NAMES.includes(capitalizeFirstLetter(color)) ? color : "";
    }

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

                if (token == "background" || token == "backgroundColor") {
                    // console.log(begin);
                    // if (begin == -1){ 
                    //     console.log('here');
                    // }

                    setCustomStyle((prev) => ({
                        ...prev,
                        backgroundColor: isColorValid(param.trim())
                    }))
                } 
            } else {
                setCustomStyle({});
            }
        }
    }

    return (
        <div className="game-simulator">
            <div id='text' className='text' style={customStyle}>Make me bold, then italic</div>
            <img 
      src="https://web-mobile-first.s3.eu-west-3.amazonaws.com/production/small_apple_iphone_13_pro_max_2021_1b54b42564.png"
      alt="new"
      />
        </div>
    );
};