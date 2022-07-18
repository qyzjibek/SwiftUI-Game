import "./index.css"
import { useContext, useState } from "react";
import { EditorContext } from "../../Context";
import CustomizedDialogs from "../PopUp";
import modifierIcon from '../../assets/modifier-icon.png'
import { options } from "../../data/suggestions";

export const Editor = ({text, label, isValidAnswer, level}) => {
    const [suggested, setSuggested] = useState(false);

    const [suggestions, setSuggestions] = useState([]);

    const {handleContentChange} = useContext(EditorContext);

    const handleTextAreaChange = (typedText) => {
        handleContentChange(typedText);
        if (suggested) {setSuggested(false); return;}
        const modifiers = typedText.replace(/\s/g, "").replace(/(\r\n|\n|\r)/gm, "").split('.');
        const last = modifiers[modifiers.length - 1];
        let matches = [];
        if (text.length > 0) {
            matches  = options.filter((option) => option.autocomplete.toLowerCase().includes(last.toLowerCase()));
            setSuggestions(matches);
            setSuggested(true);
        }
    }

    const onSuggestionHandler = (selectedSuggestion) => {
        handleContentChange(selectedSuggestion.autocomplete);
        setSuggestions([]);
    }

    const textModifier = () => {
        switch (level) {
            case 4: return ".background(.red)";
            case 5: return ".background(.green)"; 
            case 6: return ".background(.yellow)";
            default: return "";
        }
    }
    return (
        <div className="editor-wrapper">
            <div className="editor-content">
                <pre>
{`
    import SwiftUI

    struct ContentView: View {
        var body: some View {
            ${label}
            ${textModifier()}
`}
                </pre>
                <div>
                <textarea value={text} autocapitalize="none" spellcheck="false" placeholder="Type your answer here..." onChange={e => handleTextAreaChange(e.target.value)} style={{height: `${level < 3 ? "24px" : "48px"}`}} onBlur={() => {setTimeout(() => {setSuggestions([])}, 100)}}  onKeyPress= {(e) => {
            if (e.key === 'Enter' && suggestions.length > 0) {
                handleContentChange(suggestions[0].autocomplete);
                setSuggestions([]);
                setSuggested(true);
            }
    }}></textarea>
                {suggestions.length > 0 && <div className="suggestion-wrapper">
                    {suggestions && suggestions.map((suggestion, i) => (
                        <div key={i} className="suggestion" onClick={() => onSuggestionHandler(suggestion)}><img src={modifierIcon} alt="M" className="icon-img"/>{suggestion.initializer}</div>
                    ))}
                </div>}
                </div>
                <pre>
{`
        }
    }
`}
                </pre>
                <div>
                <CustomizedDialogs isValidAnswer={isValidAnswer} level={level}/>
                </div>
            </div>
        </div>
    );
};
