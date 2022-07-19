import "./index.css"
import { useContext, useState } from "react";
import { EditorContext } from "../../Context";
import CustomizedDialogs from "../PopUp";
import {ReactComponent as ArrowRightSVG} from  '../../assets/arrow-right.svg'
import {ReactComponent as ArrowLeftSVG} from '../../assets/arrow-left.svg' 
import structIcon from '../../assets/struct-icon.png';
import { viewSuggestions as options } from "../../data/suggestions";

export const ViewEditor = ({text, isValidAnswer, level}) => {
    const [suggested, setSuggested] = useState(false);

    const [suggestions, setSuggestions] = useState([]);

    const {handleContentChange, mode, setMode} = useContext(EditorContext);

    const handleTextAreaChange = (typedText) => {
        handleContentChange(typedText);

        if (suggested) {
            setSuggested(false); return;
        }

        const views = typedText.split(/[\n ]/);
        const last = views[views.length - 1];
        let matches = [];
        
        if (text.length > 0) {
            matches = options.filter((option) => option.autocomplete.toLowerCase().includes(last.toLowerCase()));
            setSuggestions(matches);
            setSuggested(true);
        }
    }

    const onSuggestionHandler = (selectedSuggestion) => {
        handleContentChange( removeBeforeComplete(text) + selectedSuggestion.autocomplete);
        setSuggestions([]);
        setSuggested(true);
    }

    const removeBeforeComplete = t => t.substr(0, t.lastIndexOf('\n')) + '\n';

    const onIncrHandler = () => {
        setMode((prev) => (prev < 3 ? prev + 1 : prev))
    }

    const onDecrHandler = () => {
        setMode((prev) => (prev > 1 ? prev - 1 : prev))
    }

    return (
        <div className="editor-wrapper">
            <div className="editor-content">
                <div className="btn-group">
                    <button className='control-btn' style={{width: "10px", margin: "10px", marginBottom:"0"}} onClick={onDecrHandler}><ArrowLeftSVG className='control-btn-image'/></button>
                    <button className='control-btn' style={{ margin: "10px", marginBottom:"0"}} onClick={onIncrHandler}><ArrowRightSVG className='control-btn-image'/></button>
                </div>
                <pre>
{`
    import SwiftUI

    struct ContentView: View {
        var body: some View {
            HStack {
`}
                </pre>
                {mode === 1 && 
                    <div>
                    <textarea value={text} 
                    autocapitalize="none" 
                    spellcheck="false" 
                    placeholder="Type your answer here..." 
                    onChange={e => handleTextAreaChange(e.target.value)} 
                    style={{height: "24px", marginLeft: "125px", width: "70%"}}  
                    onKeyPress= {(e) => {
                        if (e.key === 'Enter' && suggestions.length > 0) {
                            onSuggestionHandler(suggestions[0]);
                        }
                    }}>
                    </textarea>
                    {suggestions.length > 0 && <div className={`view-suggestion-wrapper ${suggestions.length > 3 ? "murat" : "jibek"}`}>
                        {suggestions && suggestions.map((suggestion, i) => (
                            <div key={i} className="suggestion" onClick={() => onSuggestionHandler(suggestion)}><img src={structIcon} alt="M" className="icon-img"/>{suggestion.initializer}</div>
                        ))}
                    </div>
                    }
                    </div>
                }
                <pre>
{`
                Text("first")
`}
                </pre>
                {mode === 2 && 
                    <div>
                    <textarea value={text} 
                    autocapitalize="none" 
                    spellcheck="false" 
                    placeholder="Type your answer here..." 
                    onChange={e => handleTextAreaChange(e.target.value)} 
                    style={{height: "24px", marginLeft: "125px", width: "70%"}}  
                    onKeyPress= {(e) => {
                        if (e.key === 'Enter' && suggestions.length > 0) {
                            onSuggestionHandler(suggestions[0]);
                        }
                    }}>
                    </textarea>
                    {suggestions.length > 0 && <div className={`view-suggestion-wrapper ${suggestions.length > 3 ? "murat" : "jibek"}`}>
                        {suggestions && suggestions.map((suggestion, i) => (
                            <div key={i} className="suggestion" onClick={() => onSuggestionHandler(suggestion)}><img src={structIcon} alt="M" className="icon-img"/>{suggestion.initializer}</div>
                        ))}
                    </div>
                    }
                    </div>
                }
                <pre>
{`
                Text("second")
`}
                </pre>
                {mode === 3 && 
                    <div>
                    <textarea value={text} 
                    autocapitalize="none" 
                    spellcheck="false" 
                    placeholder="Type your answer here..." 
                    onChange={e => handleTextAreaChange(e.target.value)} 
                    style={{height: "24px", marginLeft: "125px", width: "70%"}}  
                    onKeyPress= {(e) => {
                        if (e.key === 'Enter' && suggestions.length > 0) {
                            onSuggestionHandler(suggestions[0]);
                        }
                    }}>
                    </textarea>
                    {suggestions.length > 0 && <div className={`view-suggestion-wrapper ${suggestions.length > 3 ? "murat" : "jibek"}`}>
                        {suggestions && suggestions.map((suggestion, i) => (
                            <div key={i} className="suggestion" onClick={() => onSuggestionHandler(suggestion)}><img src={structIcon} alt="M" className="icon-img"/>{suggestion.initializer}</div>
                        ))}
                    </div>
                    }
                    </div>
                }
                <pre>
{`
            }
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
